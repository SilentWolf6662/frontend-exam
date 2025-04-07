import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="relative bg-gradient-to-b from-black via-slate-900 to-black text-white flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
            {/* Animated stars background */}
            <div className="absolute inset-0 -z-10">
                <div className="size-full animate-starfield" />
                {[...Array(50)].map((_, i) => (
                    <div
                        key={`star-#${i}`}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            <h1 className="text-9xl font-extrabold mb-4 tracking-widest">404</h1>
            <p className="text-2xl mb-2">Lost in space...</p>
            <p className="text-lg mb-2 max-w-full">
                The coordinates you entered led to an unexplored sector of the galaxy.
            </p>
            <p className="text-lg mb-2 max-w-full">
                Our radars can't locate any life here.
            </p>
            <p className="text-lg mb-8 max-w-full">
                Please check the URL or return to the safety of our home page.
            </p>
            <Link href="/" passHref>
                <Button className="bg-primary hover:bg-primary/60 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition">
                    Return to Home
                </Button>
            </Link>
        </section>
    );
}
