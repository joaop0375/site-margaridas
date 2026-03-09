import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-transparent flex items-center justify-center overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight leading-tight">
                        Realçando sua <br />
                        <span className="italic">beleza natural</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-[500px] leading-relaxed">
                        Atendimento personalizado com produtos veganos e exclusivos para o seu bem-estar.
                    </p>
                    <Link href="https://wa.me/5561995919569?text=Ol%C3%A1%2C%20Margaridas%20Beauty%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                        Agendar horário
                    </Link>
                </div>

                {/* Image Placeholder - resembling the soft girl image */}
                <div className="md:w-1/2 flex justify-center relative">
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-t-[100px] rounded-b-[0px] overflow-hidden shadow-2xl border-4 border-white/50 bg-background/50 flex flex-col items-center justify-center p-6 md:p-12 hover:shadow-primary/20 transition-all duration-500">
                        <img
                            src="/logo.png"
                            alt="Margaridas Beauty Sudoeste Logo"
                            className="w-full h-auto max-h-full object-contain opacity-90 drop-shadow-sm scale-110"
                        />
                    </div>
                    {/* Decorative Elements (Flowers/Leaves vibes) */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#faf0e6] to-transparent pointer-events-none opacity-50"></div>
        </section>
    );
}
