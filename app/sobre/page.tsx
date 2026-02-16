import Image from "next/image";

export default function SobrePage() {
    return (
        <main className="container mx-auto px-4 py-16">
            {/* Hero-like intro */}
            <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-serif text-primary">Nossa História</h1>
                        <p className="text-xl font-medium text-muted-foreground">Fernanda, Fabiane e Ana Gabriela</p>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Somos uma empresa especializada na área da beleza, oferecendo diversos serviços como escovas, design de sobrancelhas e tratamentos capilares, proporcionando também um verdadeiro momento de autocuidado, bem-estar e renovação.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Cada serviço é pensado para proporcionar desaceleração, em um ambiente calmo, acolhedor e terapêutico. Temos muitas clientes que nos indicam e estão conosco desde o início, o que reforça a confiança e o carinho pelo nosso trabalho.
                    </p>
                </div>
                <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center text-muted-foreground/50">
                        <span className="text-lg">Equipe Margaridas</span>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="grid sm:grid-cols-3 gap-8 text-center bg-card border p-12 rounded-3xl shadow-sm">
                <div className="space-y-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto shadow-sm text-2xl">🌿</div>
                    <h3 className="font-bold text-xl text-primary">Autocuidado</h3>
                    <p className="text-muted-foreground text-sm">Um momento pensado para sua renovação pessoal.</p>
                </div>
                <div className="space-y-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto shadow-sm text-2xl">✨</div>
                    <h3 className="font-bold text-xl text-primary">Personalização</h3>
                    <p className="text-muted-foreground text-sm">Serviços definidos em conjunto com você.</p>
                </div>
                <div className="space-y-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto shadow-sm text-2xl">💖</div>
                    <h3 className="font-bold text-xl text-primary">Acolhimento</h3>
                    <p className="text-muted-foreground text-sm">Ambiente calmo e terapêutico.</p>
                </div>
            </section>
        </main>
    );
}
