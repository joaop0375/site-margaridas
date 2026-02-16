import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
    const services = [
        { title: "Unhas", description: "Design e cuidado", icon: "💅" },
        { title: "Maquiagem", description: "Realce sua beleza", icon: "💄" },
        { title: "Bloom Design", description: "Sobrancelhas perfeitas", icon: "✨" },
        { title: "Cabelo", description: "Corte e tratamento", icon: "💇‍♀️" },
    ];

    return (
        <section className="py-20 bg-transparent">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                        Nossos Serviços
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Oferecemos uma variedade de serviços especiais para realçar sua beleza natural.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="group border-none shadow-sm hover:shadow-md transition-all duration-300 bg-background overflow-hidden rounded-xl">
                            <CardContent className="p-0">
                                <div className="h-48 bg-muted/20 flex items-center justify-center group-hover:bg-muted/30 transition-colors">
                                    <span className="text-5xl">{service.icon}</span>
                                </div>
                                <div className="p-6 text-center space-y-2 relative">
                                    <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {service.description}
                                    </p>

                                    {/* Decorative underline */}
                                    <div className="w-12 h-0.5 bg-secondary mx-auto mt-4 opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-300" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
