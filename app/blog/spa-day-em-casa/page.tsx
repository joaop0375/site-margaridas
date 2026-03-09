import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function SpaDayEmCasaPost() {
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
                    <span className="px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full">Bem-estar</span>
                    <span>15 Jan, 2026</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                    Spa Day em Casa: 5 Passos para o Seu Ritual de Relaxamento
                </h1>
            </header>

            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[600px] bg-muted/30 rounded-3xl mb-14 flex items-center justify-center relative overflow-hidden shadow-xl border border-border/50">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
                        alt="Background Blur"
                        className="w-full h-full object-cover opacity-50 blur-3xl scale-125"
                    />
                </div>
                <div className="relative z-10 w-full h-full max-w-5xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
                        alt="Spa em casa relaxamento"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <article className="max-w-none text-lg md:text-xl leading-relaxed text-foreground/90 space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed font-semibold text-foreground mb-8">
                    Não há nada mais reparador do que dedicar um tempo exclusivo para você. Um Spa Day em casa é mais acessível e simples de fazer do que parece, trazendo um alívio imediato na carga mental e vitalidade para o corpo.
                </p>

                <p>
                    A rotina corrida nos consome energia silenciosamente. Você pode recriar a aura mágica de um centro estético ou do nosso próprio espaço dentro de um ambiente só seu: o seu banheiro, com itens que muitas vezes você já tem na nécessaire. Vamos descobrir os passos!
                </p>

                <div className="my-10 p-6 md:p-8 bg-teal-50 rounded-2xl border-l-4 border-teal-500">
                    <p className="text-2xl font-serif text-teal-900 italic font-medium">
                        "O autocuidado é a nossa recarga natural; parar para respirar não é perda de tempo, é o que garante que o seu tempo flua com mais qualidade."
                    </p>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-8 font-semibold">5 Passos do Ritual de Bem-estar</h2>
                <p className="mb-8">
                    Siga este guia simples e prepare-se para desligar da semana agitada:
                </p>

                <ul className="space-y-5 mb-14 bg-muted/20 p-6 md:p-8 rounded-3xl border border-border/50">
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-teal-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>1. Crie o Ambiente:</strong> Coloque o celular no silencioso. Diminua a luz, use abajures, acenda velas e coloque uma playlist tranquila rolando de fundo.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-teal-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>2. O Banho Multissensorial:</strong> Gotas de óleo essencial de lavanda no piso (longe do ralo) para subir com o vapor do chuveiro morno transformarão sua mente num estado de relaxamento profundo.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-teal-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>3. Esfoliação Corporal:</strong> Durante o banho, use os melhores produtos esfoliantes, massageando principalmente áreas ásperas do corpo de forma circular para estimular a renovação celular.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-teal-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>4. Máscaras e Ampolas:</strong> Aplique uma máscara facial purificante/hidratante e aproveite para passar uma ampola de tratamento focado nos fios do seu cabelo. Deixe a química agir com calma!</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-teal-600 shrink-0 mr-4 mt-0.5" />
                        <span><strong>5. Finalização Focada:</strong> Hidratante corporal generoso, roupão ou pijamas macios limpos, chás aromáticos (camomila/maracujá) para ingerir após e deitar sem telas!</span>
                    </li>
                </ul>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-10 font-semibold">Potencializando com as Especialistas</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600">🌿</span>
                            Autocuidado Constante
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Sugerimos realizar o seu Spa Day domiciliar quinzenalmente para construir o hábito de se priorizar.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600">🛁</span>
                            Tratamentos de Salão
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Para a cereja no bolo mensal, unificar essa tranquilidade caseira com as massagens, drenagens e tratamentos capilares profundos conosco formam o match do equilíbrio perfeito!</p>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-teal-50 via-background to-cyan-50 border border-teal-200 p-10 md:p-14 rounded-3xl text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-serif text-foreground font-bold mb-6">Precisa daquele Spa Day Completo Conosco?</h3>
                        <p className="text-xl text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Permita-se receber cuidados em nossas mãos. Agende tratamentos exclusivos de estética corporal, facial, e nossa famosíssima lavagem terapêutica.
                        </p>
                        <a
                            href="https://wa.me/5561995919569?text=Ol%C3%A1%2C%20Margaridas%20Beauty!%20Li%20o%20artigo%20sobre%20o%20Spa%20Day%20e%20gostaria%20de%20vivenciar%20isso%20no%20Margaridas!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-teal-700 rounded-full hover:bg-teal-800 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                        >
                            Agendar Momento Margaridas
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}
