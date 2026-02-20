import { Zap, Sparkles, Scissors, Heart } from "lucide-react";

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
            { name: "Manicure e Pedicure", price: "R$ 80,00" },
            { name: "Adicional Francesinha", price: "R$ 5,00" },
            { name: "Adicional Blindagem", price: "R$ 80,00" },
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
                    Tabela de preços 2026. Oferecemos uma variedade de serviços especiais para realçar sua beleza natural.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {SERVICES.map((cat, idx) => (
                    <div key={idx} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                        <div className="p-6 bg-secondary/30 flex items-center gap-3 border-b">
                            <cat.icon className="w-6 h-6 text-primary" />
                            <h2 className="font-semibold text-xl text-primary">{cat.category}</h2>
                        </div>
                        <div className="p-6 space-y-4 flex-grow">
                            {cat.items.map((item, i) => (
                                <div key={i} className="flex justify-between items-start border-b border-dashed border-border/60 pb-2 last:border-0 last:pb-0">
                                    <div className="max-w-[70%]">
                                        <h3 className="font-medium text-foreground text-sm leading-tight">{item.name}</h3>
                                    </div>
                                    <span className="font-semibold text-primary text-xs whitespace-nowrap">{item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-muted/20 text-center border-t">
                            <a
                                href="https://wa.me/5561995919569?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-primary hover:underline"
                            >
                                Agendar no WhatsApp
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}