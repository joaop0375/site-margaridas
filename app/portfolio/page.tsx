import Image from "next/image";

export default function PortfolioPage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
            <div className="text-center mb-20 space-y-6">
                <h1 className="text-5xl font-bold tracking-tight lg:text-6xl font-serif text-foreground">
                    Nosso Portfólio
                </h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
                    Um catálogo com alguns de nossos melhores resultados e transformações.
                </p>
            </div>

            {/* Grid Estilo Catálogo (Masonry-like ou Grid Flexível) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {[
                    { src: "/images/portfolio/loiro-iluminado.jpg", title: "Loiro Iluminado", category: "Coloração" },
                    { src: "/images/portfolio/morena-iluminada.jpg", title: "Morena Iluminada", category: "Coloração" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-gloss-express-ng-de-france-009.jpg", title: "Gloss Express", category: "Tratamento" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-realinhamento-capilar-vegano-001.jpg", title: "Realinhamento Vegano", category: "Tratamento" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-design-de-sobrancelhas-df-006.jpg", title: "Corte / Styling", category: "Cabelo" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-terapia-capilar-brasilia-002.jpg", title: "Manicure Tradicional", category: "Unha" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-terapia-capilar-brasilia-012.jpg", title: "Cuidado e Esmaltação", category: "Unha" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-terapia-capilar-brasilia-022.jpg", title: "Color Bloom", category: "Design com Coloração" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-tratamento-capilar-vegano-007.jpg", title: "Tratamento Vegano", category: "Unha" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-estetica-sudoeste-top-master-010.jpg", title: "Serviço Top Master", category: "Cabelo" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-salao-de-beleza-brasilia-024.jpg", title: "Beleza Iluminada", category: "Sobrancelha" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-margaridas-beauty-sudoeste-005.jpg", title: "Antes e Depois", category: "Cabelo" },
                    { src: "/images/portfolio/margaridas-beauty-sudoeste-margaridas-beauty-sudoeste-015.jpg", title: "Produção Completa", category: "Cabelo" },
                ].map((item, index) => (
                    <div key={index} className="group relative flex flex-col gap-4">
                        {/* Container da Imagem Inteira (Catálogo) */}
                        <div className="relative w-full aspect-[4/5] bg-muted/30 rounded-2xl overflow-hidden border border-border/50 shadow-sm group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-500">
                            {/* Imagem com object-contain para não dar zoom/cortar */}
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
                            />

                            {/* Efeito de overlay suave no hover apenas para estética */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>

                        {/* Legendas fora da imagem para visual clean de catálogo */}
                        <div className="px-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">{item.category}</p>
                            <h3 className="font-serif text-2xl text-foreground font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
