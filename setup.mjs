import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in environment");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setup() {
  console.log('Creating buckets...');
  
  // Create images bucket if it doesn't exist
  const { data: buckets } = await supabase.storage.listBuckets();
  const bucketNames = buckets?.map(b => b.name) || [];
  
  if (!bucketNames.includes('images')) {
    const { error } = await supabase.storage.createBucket('images', { public: true });
    if (error) console.error('Error creating images bucket:', error);
    else console.log('Created images bucket');
  } else {
    console.log('images bucket already exists');
  }
  
  if (!bucketNames.includes('data')) {
    const { error } = await supabase.storage.createBucket('data', { public: false });
    if (error) console.error('Error creating data bucket:', error);
    else console.log('Created data bucket');
  } else {
    console.log('data bucket already exists');
  }

  // Upload initial portfolio.json
  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'portfolio.json');
    const fileContent = await fs.readFile(dataFilePath, 'utf8');
    
    const { error: uploadError } = await supabase.storage
      .from('data')
      .upload('portfolio.json', fileContent, {
        contentType: 'application/json',
        upsert: true
      });
      
    if (uploadError) {
      console.error('Error uploading portfolio.json:', uploadError);
    } else {
      console.log('Successfully uploaded portfolio.json to Supabase Storage');
    }
  } catch (err) {
    console.error('Error reading local portfolio.json:', err);
  }
}

setup();
