import { Button } from "@/components/ui/button";

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
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Agendar horário
                    </button>
                </div>

                {/* Image Placeholder - resembling the soft girl image */}
                <div className="md:w-1/2 flex justify-center relative">
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-t-[100px] rounded-b-[0px] overflow-hidden shadow-2xl border-4 border-white/50">
                        {/* In a real scenario, we'd use Next.js Image component here with a real asset. 
                           For now, using a colored div or placeholder. 
                        */}
                        <div className="w-full h-full bg-muted/30 flex items-center justify-center text-muted-foreground">
                            <span className="sr-only">Imagem da modelo</span>
                            {/* Placeholder for the image */}
                            <div className="absolute inset-0 bg-[#e6d0c2] opacity-20"></div>
                        </div>
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
