import { Sparkles, Scissors, Heart, MessageCircle } from "lucide-react";

const SERVICES = [
    {
        category: "Cabelos",
        icon: Scissors,
        items: [
            { name: "Realinhamento (curtos)", price: "R$ 450,00" },
            { name: "Realinhamento (longos)", price: "R$ 490,00" },
            { name: "Corte de cabelo", price: "R$ 100,00" },
            { name: "Corte terapêutico", price: "R$ 85,00" },
            { name: "Escova (lisa/modelada)", price: "R$ 80,00 - 90,00" },
            { name: "Hidratação + Escova", price: "R$ 199,90" },
            { name: "Nutrição + Escova", price: "R$ 229,90" },
            { name: "Reconstrução + Escova", price: "R$ 259,90" },
            { name: "Detox + Escova", price: "R$ 269,90" },
            { name: "Gloss Express", price: "R$ 180,00" },
            { name: "Retoque de raiz (coloração cliente)", price: "R$ 120,00" },
            { name: "Penteado", price: "A partir de R$ 120,00" },
        ]
    },
    {
        category: "Sobrancelhas & Face",
        icon: Sparkles,
        items: [
            { name: "Brow lamination", price: "R$ 189,90" },
            { name: "Lash lifting", price: "R$ 189,90" },
            { name: "Design de sobrancelhas", price: "R$ 70,00" },
            { name: "Design + Coloração", price: "R$ 90,00" },
            { name: "PR sobrancelhas", price: "R$ 149,90" },
            { name: "Maquiagem", price: "R$ 159,90" },
            { name: "Spa labial", price: "R$ 99,90" },
            { name: "Depilação (buço/axilas)", price: "R$ 25,00 - 50,00" },
        ]
    },
    {
        category: "Mãos & Pés",
        icon: Heart,
        items: [
            { name: "Manicure e Pedicure", price: "R$ 88,00" },
            { name: "Adicional Francesinha", price: "R$ 5,00" },
            { name: "Plástica dos pés", price: "R$ 100,00" },
            { name: "Escalda pés", price: "R$ 35,00" },
            { name: "Lavagem terapêutica", price: "R$ 70,00" },
        ]
    }
];

export default function ServicosPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-serif text-primary">Nossos Serviços</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Tabela de preços 2026. Clique no serviço desejado para iniciar um agendamento rápido e personalizado via WhatsApp.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {SERVICES.map((cat, idx) => (
                    <div key={idx} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group/card">
                        <div className="p-6 bg-secondary/30 flex items-center gap-3 border-b border-border/50 group-hover/card:bg-secondary/50 transition-colors">
                            <div className="p-2 bg-background rounded-full shadow-sm">
                                <cat.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-semibold text-xl text-primary font-serif">{cat.category}</h2>
                        </div>
                        <div className="p-4 flex-grow space-y-1">
                            {cat.items.map((item, i) => {
                                const wpMessage = encodeURIComponent(`Olá, Margaridas Beauty! Gostaria de agendar ou saber mais sobre o serviço: *${item.name}* (${item.price}).`);
                                const wpLink = `https://wa.me/5561995919569?text=${wpMessage}`;

                                return (
                                    <a
                                        key={i}
                                        href={wpLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex justify-between items-center p-3 rounded-lg hover:bg-primary/5 hover:shadow-sm transition-all border border-transparent hover:border-primary/20"
                                        title={`Agendar ${item.name}`}
                                    >
                                        <div className="max-w-[70%]">
                                            <h3 className="font-medium text-foreground text-sm leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-semibold text-primary text-xs whitespace-nowrap">{item.price}</span>
                                            <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 group-hover:bg-primary sm:flex hidden">
                                                <MessageCircle className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                        <div className="p-4 bg-muted/20 text-center border-t border-border/50">
                            <a
                                href={`https://wa.me/5561995919569?text=${encodeURIComponent(`Olá, Margaridas Beauty! Gostaria de tirar uma dúvida sobre os serviços de ${cat.category.toLowerCase()}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Dúvidas sobre {cat.category.toLowerCase()}?
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}