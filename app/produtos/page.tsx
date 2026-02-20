import Image from "next/image";

const PRODUCTS = [
    {
        id: 1,
        name: "Shampoo Fito Capillus Herbal",
        description: "Limpeza e desobstrução do sistema capilar.",
        price: "R$ 113,00",
        image: "/images/products/shampoo-fito-capillus.jpg"
    },
    {
        id: 5,
        name: "Fito Capillus Eucalyptus Balm Conditioner",
        description: "Previne os efeitos do estresse e atua no controle da microbiota.",
        price: "R$ 111,00",
        image: "/images/products/eucalyptus-balm-conditioner.jpg"
    },
    {
        id: 6,
        name: "Fito Capillus Herbal Jelly Scalp Massage",
        description: "Geleia de ervas finas para massagem crânio-facial.",
        price: "R$ 123,00",
        image: "/images/products/herbal-jelly-scalp.jpg"
    },
    {
        id: 7,
        name: "Fito Capillus Eucalyptus Shampoo",
        description: "Previne os efeitos do estresse e atua no controle da microbiota.",
        price: "R$ 130,00",
        image: "/images/products/eucalyptus-shampoo.jpg"
    },
    {
        id: 8,
        name: "Urbano Spa Powerful Eyes",
        description: "Estimula o crescimento dos cílios e das sobrancelhas.",
        price: "R$ 111,00",
        image: "/images/products/powerful-eyes.jpg"
    }
];

export default function ProdutosPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-serif text-primary">Nossos Produtos</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Levamos o cuidado do salão para sua casa. Trabalhamos com linhas exclusivas como NG de France e Grandha.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="group relative bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <div className="aspect-square bg-white flex items-center justify-center p-8 relative">
                            {product.image ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="w-32 h-32 bg-secondary/20 rounded-lg flex items-center justify-center text-muted-foreground font-serif text-2xl">
                                    IMG
                                </div>
                            )}
                        </div>
                        <div className="p-4 space-y-2">
                            <h3 className="font-semibold text-lg text-primary leading-tight min-h-[3rem]">{product.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">{product.description}</p>
                            <div className="pt-2 flex items-center justify-between">
                                <span className="font-bold text-lg">{product.price}</span>
                                <a
                                    href={`https://wa.me/5561995919569?text=Ol%C3%A1!%20Gostaria%20de%20comprar%20o%20produto:%20${encodeURIComponent(product.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors"
                                >
                                    Comprar
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
