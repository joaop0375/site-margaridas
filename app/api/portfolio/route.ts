import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    try {
        const { data, error } = await supabase.storage
            .from('data')
            .download('portfolio.json');
            
        if (error) {
            console.error('Supabase download error:', error);
            // Fallback to empty array if file not found
            if (error.message.includes('not found') || error.message.includes('Object not found')) {
                return NextResponse.json([]);
            }
            throw error;
        }

        const text = await data.text();
        return NextResponse.json(JSON.parse(text));
    } catch (error) {
        console.error('GET Error:', error);
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const jsonString = JSON.stringify(body, null, 4);
        
        const { error } = await supabase.storage
            .from('data')
            .upload('portfolio.json', jsonString, {
                contentType: 'application/json',
                upsert: true
            });
            
        if (error) throw error;
        
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('POST Error:', error);
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}
