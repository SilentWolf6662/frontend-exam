import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Home() {

    return (
        <div className="flex flex-col">
            <section className="relative h-96 flex-grow" id="team">
            </section>
            <section className="relative h-96 flex-grow bg-[url('/newsmail-bg.jpg')] bg-cover bg-center bg-no-repeat" id="newsletter">
                <div className="max-w-screen-xl mx-auto z-10 p-4 sm:p-8 flex flex-col items-center justify-center h-full">
                    <h1 className="text-5xl text-center text-body font-bold  mb-10">
                        Tilmeld dig og få 25% rabat
                    </h1>
                    <p className="text-center text-body mb-10">Tilmeld dig vores nyhedsbrev og få 25% rabat på din første tur!</p>
                    <form className="flex gap-2" action="/subscribe" method="POST">
                        <Input className="rounded-none bg-body/40 text-body border-0 placeholder:text-body" placeholder="Din E-mail" />
                        <Button className="rounded-none bg-primary text-white hover:bg-primary/70">
                            Tilmeld
                        </Button>
                    </form>
                </div>
            </section>


        </div>
    );
}
