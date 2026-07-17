import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        
        const uploadDir = path.join(process.cwd(), 'public', 'images', 'portfolio');
        await fs.mkdir(uploadDir, { recursive: true });
        
        const filePath = path.join(uploadDir, filename);
        await fs.writeFile(filePath, buffer);

        return NextResponse.json({ url: `/images/portfolio/${filename}` });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const imagePath = searchParams.get('path');

        if (!imagePath || !imagePath.startsWith('/images/portfolio/')) {
            return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
        }

        const fullPath = path.join(process.cwd(), 'public', imagePath.split('?')[0]);
        await fs.unlink(fullPath);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Delete error:', error);
        // Sometimes file is already deleted, we can just return success
        return NextResponse.json({ success: true });
    }
}
