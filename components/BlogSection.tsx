import Link from "next/link";
import Image from "next/image";

const BLOG_POSTS = [
    {
        id: 5,
        title: "Lavagem Terapêutica: Muito Além de Lavar os Cabelos",
        excerpt: "Descubra como a lavagem capilar se transforma em um verdadeiro ritual de cuidado e reconexão.",
        date: "05 Mar, 2026",
        image: "/Lavagem%20terap%C3%AAutica.png",
        category: "Terapia Capilar",
        color: "bg-emerald-50",
        slug: "lavagem-terapeutica"
    },
    {
        id: 1,
        title: "Tendências de Cabelo para 2026",
        excerpt: "Descubra os cortes e cores que vão dominar a próxima estação.",
        date: "28 Jan, 2026",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
        category: "Cabelo",
        color: "bg-rose-50",
        slug: "tendencias-cabelo-2026"
    },
    {
        id: 4,
        title: "Spa Day em Casa",
        excerpt: "5 passos simples para criar um ritual de relaxamento sem sair de casa.",
        date: "15 Jan, 2026",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
        category: "Bem-estar",
        color: "bg-teal-50",
        slug: "spa-day-em-casa"
    }
];

export function BlogSection() {
    return (
        <section className="w-full py-20 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <p className="text-secondary-foreground font-bold tracking-widest uppercase text-sm">Blog & Novidades</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                            Dicas e Inspirações de Beleza
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
                    >
                        Ver todos os artigos
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <div key={post.id} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                                <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h3>
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

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center px-8 py-4 w-full sm:w-auto text-base font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl"
                    >
                        Página do Blog
                    </Link>
                </div>
            </div>
        </section>
    );
}
