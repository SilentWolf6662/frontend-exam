"use client"
import Image from "next/image";
import EditorJodit from "@/components/EditorJodit";
import { useEffect, useState } from "react";
async function updateContent(content: string, title: string) {
    if (content != null && title != null)
        await fetch("http://localhost:4444/about/admin", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content, title }),
        })
}
export default function AdminAboutEdit() {
    const [content, setContent] = useState<string>()
    const [title, setTitle] = useState<string>()
    const isSSR = typeof window === 'undefined';

    useEffect(() => {
        async function fetchData() {
            const req = await fetch("http://localhost:4444/about", {
                cache: 'no-store'
            })

            const res = await req.json()

            setTitle(res.title)
            setContent(res.content)
        }
        fetchData()
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow pt-20">
                <div className="max-w-screen-xl mx-auto p-4 sm:p-8">
                    <div className="flex flex-col gap-8 items-center">
                        <Image
                            src="/next.svg"
                            alt="Next.js logo"
                            width={180}
                            height={38}
                            priority
                        />
                        {title && !isSSR && (
                            <EditorJodit defaultValue={title} onContentChange={(title) => {
                                updateContent(content as string, title)
                            }} config={{
                                autofocus: true,
                            }} />
                        )}
                        {content && (
                            <EditorJodit defaultValue={content} onContentChange={(content) => {
                                updateContent(content, title as string)
                            }} />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
