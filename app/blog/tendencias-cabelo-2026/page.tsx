import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function TendenciasCabeloPost() {
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
                    <span className="px-4 py-1.5 bg-rose-50 text-rose-700 rounded-full">Cabelo</span>
                    <span>28 Jan, 2026</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                    Tendências de Cabelo para 2026: Os Cortes e Cores do Ano
                </h1>
            </header>

            {/* Hero Image (Using Unsplash for placeholder) */}
            <div className="w-full h-[400px] md:h-[600px] bg-muted/30 rounded-3xl mb-14 flex items-center justify-center relative overflow-hidden shadow-xl border border-border/50">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
                        alt="Background Blur"
                        className="w-full h-full object-cover opacity-50 blur-3xl scale-125"
                    />
                </div>
                <div className="relative z-10 w-full h-full max-w-5xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
                        alt="Mulher no salão com cabelo moderno"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <article className="max-w-none text-lg md:text-xl leading-relaxed text-foreground/90 space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed font-semibold text-foreground mb-8">
                    Um novo ano sempre traz a vontade de renovar o visual. Em 2026, as tendências de cabelo celebram a naturalidade, a praticidade e a saúde dos fios acima de tudo.
                </p>

                <p>
                    Seja você adepta de mudanças radicais ou de atualizações sutis, as apostas dessa temporada oferecem opções elegantes e versáteis. O foco principal não é apenas a estética, mas também como o corte e a cor se adaptam ao seu estilo de vida e realçam a sua verdadeira essência.
                </p>

                <div className="my-10 p-6 md:p-8 bg-rose-50 rounded-2xl border-l-4 border-rose-500">
                    <p className="text-2xl font-serif text-rose-900 italic font-medium">
                        "O cabelo perfeito não é aquele que segue regras rígidas, mas sim o que reflete a sua identidade."
                    </p>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-8 font-semibold">Os Cortes que Vão Dominar</h2>
                <p className="mb-8">
                    Os comprimentos médios e as camadas suaves ganham ainda mais força, trazendo movimento e leveza. O que esperar dos salões?
                </p>

                <ul className="space-y-5 mb-14 bg-muted/20 p-6 md:p-8 rounded-3xl border border-border/50">
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-rose-500 shrink-0 mr-4 mt-0.5" />
                        <span><strong>O Novo Bob (Bob Desconectado):</strong> Base reta, mas com textura e pontas desfiadas para um visual "cool" sem esforço.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-rose-500 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Butterfly Cut:</strong> Camadas que imitam o formato de asas de borboleta, perfeitas para dar volume ao cabelo longo e emoldurar o rosto.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-rose-500 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Franjas Cortina (Curtain Bangs) Estendidas:</strong> Um pouco mais longas, mesclando-se perfeitamente com as camadas da frente.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-7 h-7 text-rose-500 shrink-0 mr-4 mt-0.5" />
                        <span><strong>Pixie Texturizado:</strong> Cortes curtinhos continuam em alta, mas abusando de finalizadores para um ar mais rebelde e moderno.</span>
                    </li>
                </ul>

                <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-10 font-semibold">Tendências de Cores e Iluminação</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600">🤎</span>
                            Castanho 'Rich Chocolate'
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Tons de castanho incrivelmente brilhantes, profundos e luxuosos. O 'Glossy Brunette' é a marca de cabelos saudáveis.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">✨</span>
                            Loiro Manteiga (Butter Blonde)
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Fios mais quentes e dourados se sobrepõem aos platinados acinzentados. Traz mais luz e naturalidade à pele.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600">🍂</span>
                            Ruivo 'Cowboy Copper'
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">O ruivo acobreado misturado com tons de castanho couro. Uma cor intermediária, sofisticada e que exige menos manutenção.</p>
                    </div>

                    <div className="bg-card shadow-sm border border-border/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-600">🌟</span>
                            Mechas 'Sun-kissed'
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">Iluminação sutil e esfumada na raiz, simulando o clareamento natural do sol. Perfeito para o ano todo.</p>
                    </div>
                </div>

                <p className="mt-12 mb-6 text-xl text-center font-medium">
                    No Margaridas Beauty, nossos especialistas em visagismo estão prontos para ajudar você a adaptar essas referências ao formato do seu rosto e ao seu tom de pele.
                </p>

                <div className="mt-16 bg-gradient-to-br from-rose-50 via-background to-rose-100/50 border border-rose-200 p-10 md:p-14 rounded-3xl text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-serif text-foreground font-bold mb-6">Pronta para transformar seu visual?</h3>
                        <p className="text-xl text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Agende uma avaliação com nossos profissionais. Vamos juntos descobrir a melhor versão do seu cabelo para esta temporada com muito amor e técnica.
                        </p>
                        <a
                            href="https://wa.me/5561995919569?text=Ol%C3%A1%2C%20Margaridas%20Beauty!%20Li%20o%20artigo%20sobre%20tend%C3%AAncias%20de%20cabelo%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-rose-600 rounded-full hover:bg-rose-700 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                        >
                            Agendar minha avaliação
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}
