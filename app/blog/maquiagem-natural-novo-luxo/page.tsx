import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function MaquiagemNaturalPost() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            {/* Back string */}
            <div className="mb-10">
                <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para o blog
                </Link>
            </div>

            {/* Header */}
            <header className="mb-12 space-y-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground font-semibold">
                    <span className="px-4 py-1.5 bg-stone-100 text-stone-700 rounded-full">Maquiagem</span>
                    <span>20 Jan, 2026</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                    Maquiagem Natural: O Novo Luxo do Dia a Dia
                </h1>
            </header>

            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[600px] bg-muted/30 rounded-3xl mb-14 flex items-center justify-center relative overflow-hidden shadow-xl border border-border/50">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/maquiagem natural.jpg"
                        alt="Background Blur"
                        className="w-full h-full object-cover opacity-50 blur-3xl scale-125"
                    />
                </div>
                <div className="relative z-10 w-full h-full max-w-5xl mx-auto">
                    <img
                        src="/maquiagem natural.jpg"
                        alt="Maquiagem leve natural"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <article className="max-w-none text-lg md:text-xl leading-relaxed text-foreground/90 space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed font-semibold text-foreground mb-8">
                    A pele rebocada cheia de marcações dramáticas abriu espaço para o brilho real da pele saudável. A "Make Nada", ou "No make-up make-up", consolidou-se como o verdadeiro sinônimo de elegância moderna.
                </p>

                <p>
                    O segredo por trás do visual natural não é apenas deixar de passar maquiagem, mas em empregar produtos levíssimos nos lugares certos. O objetivo é corrigir sutis imperfeições e realçar a estrutura óssea do rosto, destacando a beleza de uma forma fresca e autêntica.
                </p>

                <div className="my-10 p-6 md:p-8 bg-stone-50 rounded-2xl border-l-4 border-stone-500">
                    <p className="text-2xl font-serif text-stone-800 italic font-medium">
                        "Menos máscara, mais pele. A maquiagem natural celebra suas características reais, aprimorando quem você já é."
                    </p>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-8 font-semibold">Os Produtos Chave da Maquiagem Natural</h2>
                <p className="mb-8">
                    Substitua a cobertura pesada por acabamentos cremosos que se fundem perfeitamente. O nécessaire ideal inclui:
                </p>

                <ul className="space-y-5 mb-14 bg-muted/20 p-6 md:p-8 rounded-3xl border border-border/50">
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-stone-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>BB Creams e Skin Tints:</strong> Para uniformizar a pele sem esconder as sardinhas, deixando o frescor aparecer.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-stone-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Blush Cremoso e Lip Tints:</strong> Proporcionam aquele efeito maravilhoso de "fui beijada pelo sol e tomei bastante água". Traz vida ao rosto de forma imediata.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-stone-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Gel de Sobrancelha:</strong> Penteadas para cima e arrumadinhas, mas sem lápis forte desenhando formatos quadrados.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-stone-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Máscara de Cílios Marrom ou Transparente:</strong> Ajuda a abrir o olhar perfeitamente durante o dia, sem pesar o visual.</span>
                    </li>
                </ul>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-10 font-semibold">A Preparação é Tudo</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-600">💆‍♀️</span>
                            Pele super hidratada
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Não existe "make natural" linda em pele ressecada. O hidratante luminoso e um primer iluminador garantem 80% do resultado.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-600">🖌️</span>
                            Aplicação suave
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">O corretivo deve ser aplicado pontualmente, apensas onde incomoda (olheiras finas, espinhas), batendo com os dedos e não esfregando.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-stone-200 bg-stone-50 p-8 rounded-2xl hover:shadow-md transition-shadow md:col-span-2">
                        <h3 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-200 text-stone-700">💍</span>
                            O Novo Luxo Pessoal
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">O conceito atual de ter status em beleza é exibir vitalidade natural. Maquiagens leves e orgânicas projetam segurança, autocuidado prioritário e extrema sofisticação.</p>
                    </div>
                </div>

                <p className="mt-12 mb-6 text-xl text-center font-medium">
                    Aqui no Margaridas Beauty aplicamos os mesmos princípios nas produções do salão, realçando o que você tem de melhor para noivas, formaturas e o seu dia-a-dia através de nossos cursos de auto-maquiagem!
                </p>

                <div className="mt-16 bg-gradient-to-br from-stone-100 via-background to-stone-50 border border-stone-200 p-10 md:p-14 rounded-3xl text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-stone-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-serif text-foreground font-bold mb-6">Aprenda a realçar você mesma</h3>
                        <p className="text-xl text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Agende uma consultoria conosco, um treinamento de automaquiagem com o nosso time, ou reserve uma make social leve para aquele evento no final de semana!
                        </p>
                        <a
                            href="https://wa.me/5561995919569?text=Ol%C3%A1%2C%20Margaridas%20Beauty!%20Li%20o%20artigo%20sobre%20make%20natural%20e%20gostaria%20de%20saber%20sobre%20esses%20servi%C3%A7os."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-stone-800 rounded-full hover:bg-stone-900 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                        >
                            Falar com a recepção
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}
