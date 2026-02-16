import { Star } from "lucide-react";

export function TestimonialsSection() {
    const testimonials = [
        { name: "Mariana Souza", text: "A melhor experiência de beleza! Ambiente acolhedor e profissionais incríveis.", rating: 5 },
        { name: "Juliana Lima", text: "Serviço impecável! Adoro como sempre saio de lá me sentindo mais bonita e confiante.", rating: 5 },
        { name: "Ana Paula Mendes", text: "Excelente atendimento e produtos de alta qualidade. Recomendo Margaridas Beauty de olhos fechados!", rating: 5 },
    ];

    return (
        <section className="py-24 bg-transparent relative">
            {/* Top decorative element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-background rounded-full border border-border/50 flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🌼</span>
                </div>
            </div>

            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                        Depoimentos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 text-center space-y-4 hover:transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-center gap-1 text-secondary">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="pt-4 font-serif text-foreground font-medium border-t border-border/30 w-1/2 mx-auto">
                                {t.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
