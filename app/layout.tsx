import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-lato",
});

export const metadata: Metadata = {
    title: {
        default: "Margaridas Beauty | Salão de Beleza e Estética",
        template: "%s | Margaridas Beauty",
    },
    description: "Realçando sua beleza natural com produtos veganos e atendimento personalizado. Unhas, maquiagem, bloom design e cabelo.",
    keywords: ["salão de beleza", "estética", "produtos veganos", "unhas", "maquiagem", "sobrancelha", "cabelo", "beleza natural"],
    authors: [{ name: "Margaridas Beauty" }],
    creator: "Margaridas Beauty",
    metadataBase: new URL("https://margaridasbeauty.com.br"), // Placeholder URL
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://margaridasbeauty.com.br",
        title: "Margaridas Beauty | Realçando sua beleza natural",
        description: "Salão de beleza e estética com foco em produtos veganos e bem-estar.",
        siteName: "Margaridas Beauty",
    },
    twitter: {
        card: "summary_large_image",
        title: "Margaridas Beauty",
        description: "Salão de beleza e estética com foco em produtos veganos e bem-estar.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${playfair.variable} ${lato.variable} font-sans`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
