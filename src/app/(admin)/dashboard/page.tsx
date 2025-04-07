import Image from "next/image";
export default function AdminDashboard() {

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
                            Welcome to Admin Dashboard
                        </h1>
                    </div>
                </div>
            </main>
        </div>
    );
}
