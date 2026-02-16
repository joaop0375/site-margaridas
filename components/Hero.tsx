import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero_bg_salon.png"
                    alt="Salão de Beleza Margaridas Beauty"
                    fill
                    priority
                    className="object-cover brightness-[0.4]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-serif">
                    Margaridas Beauty
                </h1>
                <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
                    Um verdadeiro momento de autocuidado, bem-estar e renovação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a
                        href="https://wa.me/5561995919569?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
                    >
                        Agendar Horário
                    </a>
                    <Link
                        href="/servicos"
                        className="px-8 py-3 border border-white/40 backdrop-blur-sm bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors"
                    >
                        Nossos Serviços
                    </Link>
                </div>
            </div>
        </section>
    );
}
