import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
    const portfolioItems = [
        { src: "/images/portfolio/loiro-iluminado.jpg", title: "Loiro Iluminado", category: "Cabelo" },
        { src: "/images/portfolio/morena-iluminada.jpg", title: "Morena Iluminada", category: "Cabelo" },
        { src: "/images/portfolio/portfolio-1.jpg", title: "Design de Sobrancelhas", category: "Olhar" },
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <p className="text-primary font-bold tracking-widest uppercase text-sm">Transformações Realizadas</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                            Resultados que Falam por Si
                        </h2>
                    </div>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
                    >
                        Ver todo o portfólio
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="group relative flex flex-col gap-4">
                            <div className="relative w-full aspect-[4/5] bg-background rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl group-hover:border-primary/20 border border-border/50 transition-all duration-500">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>

                            <div className="px-2">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">{item.category}</p>
                                <h3 className="font-serif text-xl text-foreground font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center px-8 py-4 w-full sm:w-auto text-base font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl"
                    >
                        Ver Catálogo Completo
                    </Link>
                </div>
            </div>
        </section>
    );
}
