export function AboutSection() {
    return (
        <section className="py-24 bg-transparent overflow-hidden relative">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative order-2 md:order-1">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-background/50 relative shadow-xl transform md:rotate-2 hover:rotate-0 transition-all duration-500 flex flex-col items-center justify-center p-8 md:p-16">
                            {/* Espaço para foto das três sócias (aguardando envio) */}
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                    <span className="text-primary font-serif text-3xl">M</span>
                                </div>
                                <p className="text-muted-foreground font-medium">Foto das Sócias<br /><span className="text-xs font-normal">(Aguardando envio)</span></p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/30 rounded-full blur-2xl -z-10"></div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-foreground relative inline-block">
                            Sobre Nós
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary/50 rounded-full"></span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p className="font-medium text-foreground/80">
                                Somos Fernanda, Fabi e Gabriela.
                            </p>
                            <p>
                                O Margaridas Beauty nasceu de um sonho que começou em uma loja de acessórios e hoje se transformou em um espaço de cuidado e beleza.
                            </p>
                            <p>
                                Unidas pelo propósito de oferecer um atendimento humanizado, trazemos precisão, amor e dedicação em cada serviço, respeitando a individualidade de cada cliente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
