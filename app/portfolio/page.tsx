import Image from "next/image";

export default function PortfolioPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-serif text-primary">Portfólio</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Confira alguns de nossos resultados e transformações.
                </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="break-inside-avoid relative rounded-xl overflow-hidden group">
                        {/* Use placeholders that simulate vertical/horizontal images */}
                        <div className={`w-full bg-muted flex items-center justify-center text-muted-foreground/30 text-4xl font-serif ${item % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                            Margaridas
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="text-center text-white p-4">
                                <h3 className="font-bold text-xl">Realinhamento Vegano</h3>
                                <p className="text-sm opacity-80">Antes & Depois</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
