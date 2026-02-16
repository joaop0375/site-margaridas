import Link from "next/link";
import Image from "next/image";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Tendências de Cabelo para 2026",
        excerpt: "Descubra os cortes e cores que vão dominar a próxima estação.",
        date: "28 Jan, 2026",
        image: "/images/blog-1.jpg",
        color: "bg-rose-50"
    },
    {
        id: 2,
        title: "Skincare: O Segredo da Pele Perfeita",
        excerpt: "Dicas essenciais para manter sua pele radiante e saudável o ano todo.",
        date: "25 Jan, 2026",
        image: "/images/blog-2.jpg",
        color: "bg-amber-50"
    },
    {
        id: 3,
        title: "Maquiagem Natural: O Novo Luxo",
        excerpt: "Como realçar sua beleza natural com técnicas minimalistas.",
        date: "20 Jan, 2026",
        image: "/images/blog-3.jpg",
        color: "bg-stone-50"
    }
];

export function BlogSection() {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Blog & Dicas</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Fique por dentro das novidades do mundo da beleza.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
                    {BLOG_POSTS.map((post) => (
                        <div key={post.id} className="group relative flex flex-col justify-between overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                            <div className={`aspect-video w-full ${post.color} relative overflow-hidden`}>
                                {/* Placeholder for images - using colors for now if images missing */}
                                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20 font-serif">Margaridas</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <Link href="#" className="text-sm font-medium text-primary hover:underline underline-offset-4">
                                    Ler mais →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
