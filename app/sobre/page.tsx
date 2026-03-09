import Image from "next/image";
import { Flower, Sparkles, Palette, Leaf, Heart } from "lucide-react";

export default function SobrePage() {
    return (

        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 pointer-events-none"></div>
                <div className="container relative z-10 px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary">Nossa História</h1>
                    <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto">
                        De um sonho construído com propósito para um refúgio de beleza e autocuidado.
                    </p>
                    <div className="w-24 h-1 bg-primary/40 mx-auto rounded-full"></div>
                </div>
            </section>

            {/* The Story & Team */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Narrative */}
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                O <strong className="text-primary font-serif">Margaridas Beauty</strong> nasceu de um sonho planejado e construído com propósito. Antes de se tornar um salão de beleza, a marca teve origem em uma loja de acessórios para cabelo, onde cada peça era produzida manualmente, refletindo cuidado, delicadeza e identidade.
                            </p>
                            <p>
                                Somos três sócias com trajetórias diferentes, unidas pelo mesmo objetivo: oferecer um atendimento humanizado e personalizado na área da beleza.
                            </p>
                            <p>
                                Desde o início, o Margaridas Beauty foi idealizado para ser um ambiente tranquilo, acolhedor e terapêutico, onde cada cliente é atendida de forma única, respeitando sua individualidade, necessidades e desejos.
                            </p>
                        </div>

                        {/* Team Image/Graphic */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-muted relative z-10">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
                                <div className="flex items-center justify-center h-full text-muted-foreground font-serif text-2xl bg-background/50">
                                    Foto da Equipe
                                </div>
                            </div>
                            {/* Decorative background element */}
                            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-secondary rounded-2xl -z-0 hidden md:block"></div>
                        </div>
                    </div>

                    {/* Team Cards */}
                    <div className="mt-24 grid md:grid-cols-3 gap-8">
                        {/* Fabi */}
                        <div className="bg-card hover:shadow-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 flex flex-col items-center text-center space-y-4 group">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <Flower className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-serif text-foreground">Fabi</h3>
                            <p className="text-xs uppercase tracking-widest text-primary font-bold">Designer de Sobrancelhas</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Atuava no mercado de luxo como vendedora, encontrou na beleza um novo caminho após a maternidade. Hoje é designer de sobrancelhas do Margaridas Beauty, trazendo precisão, sensibilidade e atenção aos detalhes em cada atendimento.
                            </p>
                        </div>

                        {/* Fernanda */}
                        <div className="bg-card hover:shadow-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 flex flex-col items-center text-center space-y-4 group">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-serif text-foreground">Fernanda</h3>
                            <p className="text-xs uppercase tracking-widest text-primary font-bold">Cabeleireira e Terapeuta Capilar</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Atua há mais de 10 anos na área da beleza. Mãe de quatro filhos, sempre enxergou no atendimento uma forma de cuidado e transformação, exercendo sua profissão com amor e dedicação.
                            </p>
                        </div>

                        {/* Gabriela */}
                        <div className="bg-card hover:shadow-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 flex flex-col items-center text-center space-y-4 group">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <Palette className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-serif text-foreground">Gabriela</h3>
                            <p className="text-xs uppercase tracking-widest text-primary font-bold">Penteadora e Maquiadora</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Filha de Fernanda, sempre teve o desejo de empreender. Cresceu acompanhando o trabalho da mãe, iniciou como auxiliar e hoje é penteadora, maquiadora e especialista em cabelos com curvatura. O nome Margaridas Beauty vem da loja de acessórios Três Margaridas, criada por Gabriela e suas irmãs, com o incentivo de Fernanda.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-secondary/10">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">Nossos Valores</h2>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4 p-6 hover:bg-background/50 rounded-xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto shadow-sm text-primary">
                                <Leaf className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl text-foreground">Autocuidado</h3>
                            <p className="text-muted-foreground">Um momento pensado exclusivamente para sua renovação pessoal e bem-estar.</p>
                        </div>
                        <div className="space-y-4 p-6 hover:bg-background/50 rounded-xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto shadow-sm text-primary">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl text-foreground">Personalização</h3>
                            <p className="text-muted-foreground">Serviços definidos em conjunto com você, respeitando sua essência.</p>
                        </div>
                        <div className="space-y-4 p-6 hover:bg-background/50 rounded-xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto shadow-sm text-primary">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl text-foreground">Acolhimento</h3>
                            <p className="text-muted-foreground">Ambiente calmo, terapêutico e preparado para receber você.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}
