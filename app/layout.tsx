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
    title: "Margaridas Beauty",
    description: "Salão de beleza e estética",
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
