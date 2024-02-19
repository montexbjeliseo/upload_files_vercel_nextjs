'use client';

import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';

export default function Upload() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);

    return (
        <main className="flex min-h-screen flex-col items-center gap-5 p-24">
            <h1>Upload an image</h1>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();

                    if (!inputFileRef.current?.files) {
                        throw new Error('No file selected');
                    }

                    const file = inputFileRef.current.files[0];

                    const newBlob = await upload(file.name, file, {
                        access: 'public',
                        handleUploadUrl: '/api/upload',
                    });

                    setBlob(newBlob);
                }}
            >
                <input name="file" ref={inputFileRef} type="file" required />
                <button type="submit">Upload</button>
            </form>
            {blob && (
                <div>
                    Blob url: <a href={blob.url}>{blob.url}</a>
                </div>
            )}
        </main>
    );
}