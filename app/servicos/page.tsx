import { Zap, Sparkles, Scissors, Heart } from "lucide-react";

const SERVICES = [
    {
        category: "Cabelos",
        icon: Scissors,
        items: [
            { name: "Realinhamento Capilar Vegano", price: "Sob consulta", duration: "120 min" },
            { name: "Tratamentos Capilares", price: "Sob consulta", duration: "60 min" },
            { name: "Gloss Express", price: "Sob consulta", duration: "45 min" },
            { name: "Penteados", price: "Sob consulta", duration: "60 min" },
        ]
    },
    {
        category: "Sobrancelhas & Face",
        icon: Sparkles,
        items: [
            { name: "Brow Lamination", price: "Sob consulta", duration: "60 min" },
            { name: "Design de Sobrancelhas", price: "Sob consulta", duration: "30 min" },
            { name: "Maquiagem", price: "Sob consulta", duration: "60 min" },
        ]
    },
    {
        category: "Mãos & Pés",
        icon: Heart,
        items: [
            { name: "Manicure Tradicional", price: "Sob consulta", duration: "40 min" },
            { name: "Pedicure Tradicional", price: "Sob consulta", duration: "40 min" },
            { name: "Spa dos Pés", price: "Sob consulta", duration: "30 min" },
        ]
    }
];

export default function ServicosPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-serif text-primary">Nossos Serviços</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Nossos serviços são personalizados e definidos em conjunto com você, respeitando suas necessidades únicas.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {SERVICES.map((cat, idx) => (
                    <div key={idx} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <div className="p-6 bg-secondary/30 flex items-center gap-3 border-b">
                            <cat.icon className="w-6 h-6 text-primary" />
                            <h2 className="font-semibold text-xl text-primary">{cat.category}</h2>
                        </div>
                        <div className="p-6 space-y-6">
                            {cat.items.map((item, i) => (
                                <div key={i} className="flex justify-between items-end border-b border-dashed border-border/60 pb-2 last:border-0 last:pb-0">
                                    <div>
                                        <h3 className="font-medium text-foreground">{item.name}</h3>
                                        {/* <span className="text-xs text-muted-foreground">{item.duration}</span> */}
                                    </div>
                                    <span className="font-semibold text-primary text-sm">{item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-muted/20 text-center">
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
