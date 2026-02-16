import Link from "next/link";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Tendências de Cabelo para 2026",
        excerpt: "Descubra os cortes e cores que vão dominar a próxima estação.",
        date: "28 Jan, 2026",
        category: "Cabelo",
        color: "bg-rose-50"
    },
    {
        id: 2,
        title: "Skincare: O Segredo da Pele Perfeita",
        excerpt: "Dicas essenciais para manter sua pele radiante e saudável o ano todo.",
        date: "25 Jan, 2026",
        category: "Pele",
        color: "bg-amber-50"
    },
    {
        id: 3,
        title: "Maquiagem Natural: O Novo Luxo",
        excerpt: "Como realçar sua beleza natural com técnicas minimalistas.",
        date: "20 Jan, 2026",
        category: "Maquiagem",
        color: "bg-stone-50"
    },
    {
        id: 4,
        title: "Spa Day em Casa",
        excerpt: "5 passos simples para criar um ritual de relaxamento sem sair de casa.",
        date: "15 Jan, 2026",
        category: "Bem-estar",
        color: "bg-teal-50"
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
                    <div key={post.id} className="flex flex-col border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card">
                        <div className={`h-48 w-full ${post.color} relative`}>
                            {/* Placeholder image */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 font-serif text-3xl">MB</div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                                <span className="font-medium px-2 py-1 bg-secondary rounded-full">{post.category}</span>
                                <span>{post.date}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                <Link href="#" className="hover:underline">{post.title}</Link>
                            </h2>
                            <p className="text-muted-foreground text-sm flex-1">
                                {post.excerpt}
                            </p>
                            <div className="mt-4 pt-4 border-t">
                                <Link href="#" className="text-sm font-medium text-primary hover:underline">
                                    Ler artigo completo
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
