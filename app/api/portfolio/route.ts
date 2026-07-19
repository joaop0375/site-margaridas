import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const t = url.searchParams.get('t') || Date.now();
        
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        
        const res = await fetch(`${supabaseUrl}/storage/v1/object/authenticated/data/portfolio.json?t=${t}`, {
            headers: {
                'Authorization': `Bearer ${supabaseKey}`,
                'apikey': supabaseKey!
            },
            cache: 'no-store'
        });
        
        if (!res.ok) {
            if (res.status === 404) return NextResponse.json([]);
            throw new Error(`Failed to fetch from Supabase: ${res.statusText}`);
        }
        
        const data = await res.json();
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
                'Surrogate-Control': 'no-store'
            }
        });
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
