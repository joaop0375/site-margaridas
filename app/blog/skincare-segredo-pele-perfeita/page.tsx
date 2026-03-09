import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function SkincarePost() {
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
                    <span className="px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full">Pele</span>
                    <span>25 Jan, 2026</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                    Skincare: O Segredo da Pele Perfeita e Radiante
                </h1>
            </header>

            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[600px] bg-muted/30 rounded-3xl mb-14 flex items-center justify-center relative overflow-hidden shadow-xl border border-border/50">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop"
                        alt="Background Blur"
                        className="w-full h-full object-cover opacity-50 blur-3xl scale-125"
                    />
                </div>
                <div className="relative z-10 w-full h-full max-w-5xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop"
                        alt="Rotina de skincare"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <article className="max-w-none text-lg md:text-xl leading-relaxed text-foreground/90 space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed font-semibold text-foreground mb-8">
                    Ter uma pele incrível não se resume a gastar fortunas em produtos milagrosos. A chave para uma cútis saudável, luminosa e resistente aos sinais do tempo mora na rotina de cuidados bem estruturada.
                </p>

                <p>
                    Hoje, a palavra de ordem é o **minimalismo eficiente** (ou skin minimalismo). Menos passos, mas com mais propósito. Conhecer o próprio tipo de pele e as necessidades diárias é o primeiro passo para uma jornada de skincare de sucesso.
                </p>

                <div className="my-10 p-6 md:p-8 bg-amber-50 rounded-2xl border-l-4 border-amber-500">
                    <p className="text-2xl font-serif text-amber-900 italic font-medium">
                        "O melhor cosmético para a pele é a constância e a disciplina diária."
                    </p>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-8 font-semibold">Os 4 Pilares Inegociáveis</h2>
                <p className="mb-8">
                    Você não precisa de uma rotina coreana de 10 passos para alcançar o brilho ideal. Especialistas confirmam que quatro pilares bem feitos garantem até 90% da saúde do seu rosto:
                </p>

                <ul className="space-y-5 mb-14 bg-muted/20 p-6 md:p-8 rounded-3xl border border-border/50">
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-amber-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Limpeza Suave:</strong> Higienizar o rosto sem repuxar ou agredir a barreira cutânea. Sabonetes com pH equilibrado são ideais.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-amber-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Hidratação Profunda:</strong> Toda pele precisa de água, inclusive as oleosas! O ácido hialurônico e as ceramidas são seus melhores amigos.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-amber-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Tratamento Específico:</strong> Uso de um ativo para sua principal queixa (Vitamina C para iluminar, Retinol para rugas finas, Niacinamida para poros).</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-amber-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Proteção Solar:</strong> O maior segredo antienvelhecimento que existe. Não encerre a rotina matinal sem um bom FPS.</span>
                    </li>
                </ul>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-10 font-semibold">Erros que Você Precisa Parar de Cometer</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">❌</span>
                            Dormir de maquiagem
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Pular a lavagem à noite causa poros obstruídos, acne e acelera incrivelmente os sinais de estresse oxidativo no rosto.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">❌</span>
                            Excesso de esfoliação
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Usar ácidos muito fortes todos os dias destrói a barreira natural, gerando vermelhidão e efeito rebote (mais oleosidade).</p>
                    </div>

                    <div className="bg-card shadow-sm border border-amber-200 bg-amber-50 p-8 rounded-2xl hover:shadow-md transition-shadow md:col-span-2">
                        <h3 className="text-xl font-bold text-amber-700 mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-200 text-amber-700">💡</span>
                            A Dica de Ouro
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Cuide da pele de dentro para fora: hidratação adequada (beba bastante água!) e uma noite de sono regulada refletem quase que imediatamente na vivacidade e firmeza da sua cútis.</p>
                    </div>
                </div>

                <p className="mt-12 mb-6 text-xl text-center font-medium">
                    No Margaridas Beauty, oferecemos preparações, limpezas de pele e revitalizações profissionais que potencializam a sua rotina de casa, garantindo resultados muito mais rápidos.
                </p>

                <div className="mt-16 bg-gradient-to-br from-amber-50 via-background to-orange-50 border border-amber-200 p-10 md:p-14 rounded-3xl text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-serif text-foreground font-bold mb-6">Trate sua pele como ela merece</h3>
                        <p className="text-xl text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Vamos descobrir juntas o que a sua pele precisa hoje? Agende um cuidado facial e saia com a pele iluminada e renovada.
                        </p>
                        <a
                            href="https://wa.me/5561995919569?text=Ol%C3%A1%2C%20Margaridas%20Beauty!%20Li%20o%20artigo%20sobre%20skincare%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20cuidados%20faciais."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-amber-950 bg-amber-300 rounded-full hover:bg-amber-400 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                        >
                            Agendar meu cuidado facial
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}
