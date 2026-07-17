"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
    {
        title: "Loiro Iluminado",
        category: "Coloração",
        images: [
            "/images/portfolio/loiro-iluminado.jpg",
            "/images/portfolio/portfolio-1.jpg"
        ]
    },
    {
        title: "Morena Iluminada",
        category: "Coloração",
        images: [
            "/images/portfolio/morena-iluminada.jpg",
            "/images/portfolio/portfolio-2.jpg"
        ]
    },
    {
        title: "Gloss Express",
        category: "Coloração",
        images: [
            "/images/portfolio/margaridas-beauty-sudoeste-gloss-express-ng-de-france-009.jpg",
            "/images/portfolio/portfolio-3.jpg"
        ]
    },
    {
        title: "Realinhamento Capilar",
        category: "Cabelo - Escova",
        images: [
            "/images/portfolio/margaridas-beauty-sudoeste-realinhamento-capilar-vegano-001.jpg",
            "/images/portfolio/portfolio-4.jpg"
        ]
    },
    {
        title: "Terapia Capilar",
        category: "Cabelo - Escova",
        images: [
            "/images/portfolio/margaridas-beauty-sudoeste-terapia-capilar-brasilia-002.jpg",
            "/images/portfolio/margaridas-beauty-sudoeste-terapia-capilar-brasilia-012.jpg",
            "/images/portfolio/margaridas-beauty-sudoeste-terapia-capilar-brasilia-022.jpg",
            "/images/portfolio/margaridas-beauty-sudoeste-tratamento-capilar-vegano-007.jpg"
        ]
    },
    {
        title: "Design de Sobrancelhas",
        category: "Sobrancelhas",
        images: [
            "/images/portfolio/margaridas-beauty-sudoeste-design-de-sobrancelhas-df-006.jpg",
            "/images/portfolio/portfolio-5.jpg"
        ]
    },
    {
        title: "Lash Lifting",
        category: "Sobrancelhas",
        images: [
            "/images/portfolio/margaridas-beauty-sudoeste-estetica-sudoeste-top-master-010.jpg",
            "/images/portfolio/portfolio-1.jpg"
        ]
    },
    {
        title: "Brow Lamination",
        category: "Sobrancelhas",
        images: [
            "/images/portfolio/margaridas-beauty-sudoeste-salao-de-beleza-brasilia-024.jpg",
            "/images/portfolio/portfolio-3.jpg"
        ]
    },
    {
        title: "Produção",
        category: "Produção (Penteado, Make)",
        images: [
            "/images/portfolio/margaridas-beauty-sudoeste-margaridas-beauty-sudoeste-005.jpg",
            "/images/portfolio/margaridas-beauty-sudoeste-margaridas-beauty-sudoeste-015.jpg"
        ]
    }
];

function ServiceCard({ item }: { item: typeof portfolioItems[0] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
    };

    return (
        <div className="group relative flex flex-col gap-3 md:gap-4">
            <div className="relative w-full aspect-[4/5] bg-muted/10 rounded-2xl overflow-hidden border border-border/50 shadow-sm group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-500">
                <Image
                    src={item.images[currentImageIndex]}
                    alt={`${item.title} - Imagem ${currentImageIndex + 1}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain w-full h-full p-1 sm:p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Navigation Arrows (only show if multiple images exist) */}
                {item.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                            aria-label="Imagem anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                            aria-label="Próxima imagem"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        
                        {/* Dots Indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/20 px-2 py-1 rounded-full backdrop-blur-xs">
                            {item.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndex(idx);
                                    }}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                                        idx === currentImageIndex ? "bg-white scale-125" : "bg-white/55 hover:bg-white/80"
                                    }`}
                                    aria-label={`Ir para imagem ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            <div className="px-1 md:px-2 flex justify-between items-center">
                <h3 className="font-serif text-xl md:text-2xl text-foreground font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                </h3>
                {item.images.length > 1 && (
                    <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-md font-medium shrink-0">
                        {currentImageIndex + 1}/{item.images.length} fotos
                    </span>
                )}
            </div>
        </div>
    );
}

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Identificar as categorias únicas e a capa para cada uma
    const categories = Array.from(new Set(portfolioItems.map(item => item.category)));

    const categoryCards = categories.map(cat => {
        const itemsInCat = portfolioItems.filter(item => item.category === cat);
        const coverItem = itemsInCat[0];
        const itemCount = itemsInCat.length;
        return {
            title: cat,
            src: coverItem?.images[0] || "",
            count: itemCount
        };
    });

    const displayedPhotos = portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <main className="container mx-auto px-4 sm:px-6 py-12 md:py-24 max-w-7xl">
            {/* Cabeçalho Principal (Oculto se uma categoria for selecionada) */}
            {!selectedCategory && (
                <div className="text-center mb-10 md:mb-16 space-y-4 md:space-y-6 animate-in slide-in-from-top-4 fade-in duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif text-foreground">
                        Nosso Portfólio
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Escolha uma de nossas especialidades para ver as transformações.
                    </p>
                </div>
            )}

            {/* Cabeçalho de Categoria Ativa (Só exibe com categoria selecionada) */}
            {selectedCategory && (
                <div className="mb-8 md:mb-12 space-y-4 md:space-y-6 animate-in slide-in-from-left-4 fade-in duration-700">
                    <Button
                        variant="ghost"
                        onClick={() => setSelectedCategory(null)}
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-2 font-medium pl-0 mb-2 md:mb-4 px-2 py-6 min-h-[44px] touch-manipulation"
                    >
                        <ArrowLeft className="w-5 h-5 shrink-0" /> <span className="text-base sm:text-sm">Voltar para Especialidades</span>
                    </Button>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="hidden sm:block p-3 bg-secondary/30 rounded-full">
                            <ArrowLeft className="w-8 h-8 text-primary opacity-0 hidden" />
                        </div>
                        <div>
                            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-1">
                                Categoria
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-foreground">
                                {selectedCategory}
                            </h2>
                            <p className="text-muted-foreground text-base md:text-lg mt-1 md:mt-2">
                                {displayedPhotos.length} {displayedPhotos.length === 1 ? 'resultado exibido' : 'resultados exibidos'}
                            </p>
                        </div>
                    </div>
                    <hr className="border-border/50 my-6 md:my-8" />
                </div>
            )}

            {/* View das Categorias */}
            {!selectedCategory && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 animate-in slide-in-from-bottom-4 fade-in duration-700">
                    {categoryCards.map((cat, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCategory(cat.title)}
                            // Hitbox gigante no mobile, cursor-pointer
                            className="group relative flex flex-col cursor-pointer bg-muted/30 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50 min-h-[250px] md:min-h-0 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            tabIndex={0}
                            role="button"
                            aria-label={`Ver portfólio de ${cat.title}`}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedCategory(cat.title);
                                }
                            }}
                        >
                            <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/5]">
                                <Image
                                    src={cat.src}
                                    alt={`Categoria ${cat.title}`}
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Overlay Escuro Focado na Capa (Gradient) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-colors duration-500 flex flex-col justify-end p-5 sm:p-6 md:p-8">
                                    <div className="transform translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-2 sm:mb-3">{cat.title}</h3>
                                        <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-lg">
                                            {cat.count} serviço{cat.count !== 1 && "s"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* View das Fotos da Categoria Específica */}
            {selectedCategory && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 animate-in slide-in-from-bottom-8 fade-in duration-700">
                    {displayedPhotos.map((item, index) => (
                        <ServiceCard key={index} item={item} />
                    ))}
                </div>
            )}
        </main>
    );
}

