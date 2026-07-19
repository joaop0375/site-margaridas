import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        
        const { data, error } = await supabase.storage
            .from('images')
            .upload(filename, buffer, {
                contentType: file.type || 'image/jpeg',
                upsert: true
            });

        if (error) {
            console.error('Supabase upload error:', error);
            throw error;
        }

        const { data: { publicUrl } } = supabase.storage
            .from('images')
            .getPublicUrl(filename);

        return NextResponse.json({ url: publicUrl });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const imageUrl = searchParams.get('path');

        if (!imageUrl) {
            return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
        }
        
        // Extract filename from the URL if it's a Supabase URL, or just take the basename
        let filename = imageUrl;
        if (imageUrl.includes('/storage/v1/object/public/images/')) {
            const parts = imageUrl.split('/storage/v1/object/public/images/');
            filename = parts[1].split('?')[0]; // remove query params if any
        } else if (imageUrl.startsWith('/images/portfolio/')) {
            // fallback in case they delete old local images from before the migration
            // although they might not be able to delete them from supabase if they are not there, 
            // but we can try ignoring the prefix
            filename = imageUrl.replace('/images/portfolio/', '');
        }

        const { error } = await supabase.storage
            .from('images')
            .remove([filename]);

        if (error) {
            console.error('Supabase delete error:', error);
            throw error;
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Delete error:', error);
        // Sometimes file is already deleted, we can just return success
        return NextResponse.json({ success: true });
    }
}
