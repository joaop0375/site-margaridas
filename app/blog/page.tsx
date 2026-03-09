import Link from "next/link";
import Image from "next/image";

const BLOG_POSTS = [
    {
        id: 5,
        title: "Lavagem Terapêutica: Muito Além de Lavar os Cabelos",
        excerpt: "Descubra como a lavagem capilar se transforma em um verdadeiro ritual de cuidado e reconexão.",
        date: "05 Mar, 2026",
        category: "Terapia Capilar",
        color: "bg-emerald-50",
        slug: "lavagem-terapeutica",
        image: "/Lavagem%20terap%C3%AAutica.png"
    },
    {
        id: 1,
        title: "Tendências de Cabelo para 2026",
        excerpt: "Descubra os cortes e cores que vão dominar a próxima estação.",
        date: "28 Jan, 2026",
        category: "Cabelo",
        color: "bg-rose-50",
        slug: "tendencias-cabelo-2026",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Skincare: O Segredo da Pele Perfeita",
        excerpt: "Dicas essenciais para manter sua pele radiante e saudável o ano todo.",
        date: "25 Jan, 2026",
        category: "Pele",
        color: "bg-amber-50",
        slug: "skincare-segredo-pele-perfeita",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop"
    },

    {
        id: 4,
        title: "Spa Day em Casa",
        excerpt: "5 passos simples para criar um ritual de relaxamento sem sair de casa.",
        date: "15 Jan, 2026",
        category: "Bem-estar",
        color: "bg-teal-50",
        slug: "spa-day-em-casa",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Nosso Blog</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Dicas, novidades e inspirações do universo da beleza.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <div key={post.id} className="flex flex-col border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card group">
                        <Link href={`/blog/${post.slug}`} className="block">
                            <div className={`h-56 w-full ${post.color} relative overflow-hidden`}>
                                {post.image.startsWith('/') ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </div>
                        </Link>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                <span className="font-semibold px-3 py-1 bg-secondary rounded-full text-secondary-foreground">{post.category}</span>
                                <span className="font-medium">{post.date}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-4">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-4 border-t border-border/50">
                                <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-primary hover:underline flex items-center">
                                    Ler artigo completo
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
