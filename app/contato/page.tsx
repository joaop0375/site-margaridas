"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContatoPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-serif text-primary">Fale Conosco</h1>
                <p className="text-muted-foreground mt-4">Estamos prontos para te atender no Sudoeste.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Info Cards */}
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                            <MapPin className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">Localização</h3>
                            <p className="text-muted-foreground">St. Sudoeste Comércio Local Sudoeste 4 Edifício Top Master - Bloco B Loja 13 - Sudoeste, Brasília - DF, 70680-470</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                            <Phone className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">WhatsApp</h3>
                            <p className="text-muted-foreground">(61) 99591-9569</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                            <Mail className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">Email</h3>
                            <p className="text-muted-foreground">Margaridasbeauty@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                            <Clock className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">Horário de Funcionamento</h3>
                            <p className="text-muted-foreground">Segunda a Sábado: 09h às 19h<br />Domingo: Fechado</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card border rounded-2xl p-8 shadow-sm">
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                                <input id="name" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Seu nome" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                                <input id="phone" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="(61) 99591-9569" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input id="email" type="email" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="seu@email.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                            <textarea id="message" className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Gostaria de agendar..." />
                        </div>
                        <button className="w-full h-10 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-16 w-full h-[400px] rounded-2xl overflow-hidden border shadow-sm">
                <iframe
                    src="https://maps.google.com/maps?q=Margaridas+Beauty+Sudoeste+Brasilia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </main>
    );
}
