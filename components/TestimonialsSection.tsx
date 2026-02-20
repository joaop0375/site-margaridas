import { Star, Flower } from "lucide-react";

export function TestimonialsSection() {
    const testimonials = [
        { name: "Cliente via Google", text: "Um salão onde cada detalhe é impecável. Desde o ambiente até os cuidados de mãos e cabelos, tudo é realizado com excelência. Indico demais!", rating: 5 },
        { name: "Cliente via Google", text: "Fui atendida na hora marcada e gostei muito do corte, a Fernanda entende muito, fui lá pra resolver o que estragaram no meu cabelo e ela arrasou!", rating: 5 },
        { name: "Cliente via Google", text: "Experiência incrível com as meninas!! Amei fazer todos os meus tratamentos com vocês. Logo voltarei para o retoque.", rating: 5 },
    ];

    return (
        <section className="py-24 bg-transparent relative">
            {/* Top decorative element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-background rounded-full border border-border/50 flex items-center justify-center shadow-sm">
                    <Flower className="w-12 h-12 text-primary" />
                </div>
            </div>

            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                        O que dizem sobre nós
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent mx-auto mt-4"></div>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Confira as avaliações de quem já viveu a experiência Margaridas Beauty.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 text-center space-y-4 hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
                            <div className="flex justify-center gap-1 text-secondary">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic leading-relaxed flex-grow">
                                "{t.text}"
                            </p>
                            <div className="pt-4 font-serif text-foreground font-medium border-t border-border/30 w-1/2 mx-auto">
                                {t.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://share.google/6qiYsyTMKyMO8yJCF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
                    >
                        <Star size={18} />
                        Avalie-nos no Google
                    </a>
                </div>
            </div>
        </section>
    );
}
