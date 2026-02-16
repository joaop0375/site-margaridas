export default function ProdutosPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-serif text-primary">Nossos Produtos</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Levamos o cuidado do salão para sua casa. Trabalhamos com linhas exclusivas como NG de France.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="group relative bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <div className="aspect-square bg-secondary/20 flex items-center justify-center p-8">
                            {/* Placeholder for Product Image */}
                            <div className="w-32 h-32 bg-white/50 rounded-lg flex items-center justify-center text-muted-foreground font-serif text-2xl">
                                NG
                            </div>
                        </div>
                        <div className="p-4 space-y-2">
                            <h3 className="font-semibold text-lg text-primary">Shampoo NG de France</h3>
                            <p className="text-sm text-muted-foreground">Hidratação profunda e brilho intenso.</p>
                            <div className="pt-2 flex items-center justify-between">
                                <span className="font-bold">R$ 89,90</span>
                                <button className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full hover:bg-primary/90">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
