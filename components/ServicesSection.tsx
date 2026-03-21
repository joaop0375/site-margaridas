import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Palette, Sparkles, User } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
    const services = [
        { title: "Unhas", description: "Manicure e pedicure", icon: Scissors, image: "/servico-unhas.jpg" },
        { title: "Maquiagem", description: "Realce sua beleza", icon: Palette, image: "/maquiagem natural.jpg" },
        { title: "Olhar", description: "", icon: Sparkles, image: "/servico-sobrancelha.jpg" },
        { title: "Penteado", description: "", icon: User, image: "/servico-cabelo.jpg" },
    ];

    return (
        <section className="py-20 bg-transparent">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                        Nossos Serviços
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Oferecemos uma variedade de serviços especiais para realçar sua beleza natural. Clique para agendar o serviço de sua escolha.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const wpMessage = encodeURIComponent(`Olá, Margaridas Beauty! Gostaria de saber mais sobre os serviços de ${service.title}.`);
                        const wpLink = `https://wa.me/5561995919569?text=${wpMessage}`;

                        return (
                            <a href={wpLink} target="_blank" rel="noopener noreferrer" key={index} className="block group">
                                <Card className="border border-transparent shadow-sm hover:shadow-xl transition-all duration-300 bg-background overflow-hidden rounded-xl h-full hover:border-primary/20">
                                    <CardContent className="p-0">
                                        <div className="h-48 bg-muted/20 flex items-center justify-center group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                                            {service.image ? (
                                                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                            ) : (
                                                <service.icon className="w-12 h-12 text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10" />
                                            )}
                                        </div>
                                        <div className="p-6 text-center space-y-2 relative">
                                            <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                                {service.description}
                                            </p>

                                            {/* Decorative underline */}
                                            <div className="w-12 h-0.5 bg-secondary mx-auto mt-4 opacity-50 group-hover:opacity-100 group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
