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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { src: "/images/portfolio/portfolio-1.jpg", title: "Design de Sobrancelhas", category: "Olhar" },
                    { src: "/images/portfolio/portfolio-2.jpg", title: "Produção de Beleza", category: "Makeup & Hair" },
                    { src: "/images/portfolio/portfolio-3.jpg", title: "Produção Completa", category: "Estilo" },
                    { src: "/images/portfolio/portfolio-5.jpg", title: "Iluminação", category: "Cabelo" },
                ].map((item, index) => (
                    <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg h-[500px]">
                        <div className="relative w-full h-full">
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="text-white">
                                <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1">{item.category}</p>
                                <h3 className="font-bold text-2xl font-serif">{item.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
