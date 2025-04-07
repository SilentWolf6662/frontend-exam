import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
export default async function AdminAbout() {
    const req = await fetch("http://localhost:4444/about", {
        cache: 'no-store'
    })

    const res = await req.json()

    console.log(res)

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
                        <h1 className="text-4xl font-bold text-center text-header">
                            {res.title}
                        </h1>
                        <div className="" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(res.content) }} />

                    </div>
                </div>
            </main>
        </div>
    );
}
