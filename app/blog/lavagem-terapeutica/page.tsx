import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function LavagemTerapeuticaPost() {
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
                    <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full">Terapia Capilar</span>
                    <span>05 Mar, 2026</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                    Lavagem Terapêutica: Muito Além de Lavar os Cabelos
                </h1>
            </header>

            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[600px] bg-muted/30 rounded-3xl mb-14 flex items-center justify-center relative overflow-hidden shadow-xl border border-border/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Lavagem%20terap%C3%AAutica.png"
                        alt="Background Blur"
                        fill
                        className="object-cover opacity-50 blur-3xl scale-125"
                    />
                </div>
                <div className="relative z-10 w-full h-full max-w-5xl mx-auto">
                    <Image
                        src="/Lavagem%20terap%C3%AAutica.png"
                        alt="Ritual de Lavagem Capilar no Margaridas Beauty"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <article className="max-w-none text-lg md:text-xl leading-relaxed text-foreground/90 space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed font-semibold text-foreground mb-8">
                    No Margaridas Beauty, a lavagem capilar deixa de ser apenas uma etapa do atendimento e se transforma em um verdadeiro ritual de cuidado e reconexão.
                </p>

                <p>
                    A <strong className="font-bold text-foreground">Lavagem Terapêutica</strong> é um tratamento capilar completo que une aromaterapia, ativos fitoterápicos e técnicas de massagem no couro cabeludo para promover saúde, equilíbrio e bem-estar do couro ao comprimento dos fios.
                </p>

                <div className="my-10 p-6 md:p-8 bg-primary/5 rounded-2xl border-l-4 border-primary">
                    <p className="text-2xl font-serif text-primary italic font-medium">
                        "Mais do que limpar, nós tratamos."
                    </p>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-8 font-semibold">O que é a Lavagem Terapêutica?</h2>
                <p className="mb-8">
                    É um protocolo desenvolvido para cuidar profundamente do couro cabeludo e da fibra capilar, utilizando:
                </p>

                <ul className="space-y-5 mb-14 bg-muted/20 p-6 md:p-8 rounded-3xl border border-border/50">
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mr-4 mt-0.5" />
                        <span><strong>Óleos essenciais</strong> com ação relaxante e equilibrante.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mr-4 mt-0.5" />
                        <span><strong>Produtos fitoterápicos</strong> com ativos naturais.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mr-4 mt-0.5" />
                        <span><strong>Técnicas de massagem</strong> que estimulam a circulação sanguínea.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mr-4 mt-0.5" />
                        <span><strong>Movimentos específicos</strong> que aliviam tensões acumuladas.</span>
                    </li>
                </ul>

                <p className="mb-14 text-xl font-medium text-foreground text-center bg-secondary/10 p-8 rounded-2xl border border-secondary/20 shadow-sm">
                    Tudo isso em um ambiente tranquilo e terapêutico, pensado para proporcionar uma experiência sensorial superior.
                </p>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-10 font-semibold">Benefícios da Lavagem Terapêutica</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">🌱</span>
                            Equilibra o couro
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Ajuda no controle da oleosidade, sensibilidade, coceira e descamação do couro cabeludo.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">✨</span>
                            Estimula o crescimento
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">A massagem ativa a circulação sanguínea, favorecendo diretamente a nutrição do bulbo capilar.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">🧘‍♀️</span>
                            Reduz o estresse
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">A aromaterapia atua diretamente no sistema nervoso, promovendo um relaxamento profundo.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">💧</span>
                            Saúde do comprimento
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Os ativos naturais tratam a fibra capilar por inteiro, devolvendo brilho, maciez e vitalidade.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-primary/20 bg-primary/5 p-8 rounded-2xl hover:shadow-md transition-shadow md:col-span-2">
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">❤️</span>
                            Bem-estar físico e emocional
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Mais do que um tratamento capilar, é um momento de pausa, autocuidado e conexão consigo mesma.</p>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-8 font-semibold">Uma Experiência que Você Precisa Sentir</h2>

                <p className="mb-10 text-xl font-medium text-foreground/80">
                    No vídeo abaixo, você poderá ver um pouco do nosso ritual de Lavagem Terapêutica. Mas a verdadeira transformação acontece quando você vive essa experiência de perto.
                </p>

                <div className="my-12 rounded-3xl overflow-hidden shadow-2xl border border-border/50 max-w-4xl mx-auto bg-black flex items-center justify-center relative">
                    <video
                        className="w-full h-auto max-h-[80vh] object-contain"
                        controls
                        preload="metadata"
                        poster="/Lavagem%20terap%C3%AAutica.png"
                    >
                        <source src="/Lavagem%20terap%C3%AAutica%20video.mp4" type="video/mp4" />
                        Seu navegador não suporta a reprodução de vídeos.
                    </video>
                </div>

                <p className="mt-12 mb-6 text-xl text-center font-medium">
                    Aqui no Margaridas Beauty, acreditamos que cabelo saudável começa pelo couro cabeludo e que beleza também é sobre equilíbrio, cuidado e sensação.
                </p>

                <div className="mt-16 bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20 p-10 md:p-14 rounded-3xl text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-serif text-foreground font-bold mb-6">Pronta para viver isso?</h3>
                        <p className="text-xl text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Se você sente que seu couro cabeludo precisa de atenção ou simplesmente deseja viver um momento de relaxamento profundo, reserve seu horário conosco.
                        </p>
                        <a
                            href="https://wa.me/5561995919569?text=Ol%C3%A1%2C%20Margaridas%20Beauty!%20Li%20o%20artigo%20no%20blog%20e%20gostaria%20de%20agendar%20uma%20experi%C3%AAncia%20de%20Lavagem%20Terap%C3%AAutica."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-primary/30"
                        >
                            Agendar minha experiência
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}
