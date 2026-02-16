"use client";

import { useState } from "react";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Receba Nossas Novidades
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Inscreva-se para receber ofertas exclusivas, dicas de beleza e novidades do Margaridas Beauty.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    {status === "success" ? (
                        <div className="p-4 rounded-lg bg-green-50 text-green-900 border border-green-200">
                            <p className="font-medium">Obrigado por se inscrever!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex space-x-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                                placeholder="Seu melhor email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === "loading"}
                            />
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                type="submit"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Enviando..." : "Inscrever"}
                            </button>
                        </form>
                    )}
                    <p className="text-xs text-muted-foreground">
                        Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
                    </p>
                </div>
            </div>
        </section>
    );
}
