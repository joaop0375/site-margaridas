"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-between px-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image src="/logo.png" alt="Margaridas Beauty Logo" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif text-xl font-bold text-primary tracking-tight leading-none">
                            Margaridas
                        </span>
                        <span className="text-xs text-muted-foreground tracking-widest uppercase">Beauty</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
                    <Link href="/sobre" className="transition-colors hover:text-primary">Sobre</Link>
                    <Link href="/servicos" className="transition-colors hover:text-primary">Serviços</Link>
                    <Link href="/produtos" className="transition-colors hover:text-primary">Produtos</Link>
                    <Link href="/portfolio" className="transition-colors hover:text-primary">Portfólio</Link>
                    <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
                    <Link href="/contato" className="transition-colors hover:text-primary">Contato</Link>
                </div>

                {/* Mobile Menu Trigger */}
                <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-foreground/50 transition-colors hover:bg-accent hover:text-foreground md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle Menu</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <div className="flex flex-col space-y-4">
                        <Link href="/sobre" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Sobre</Link>
                        <Link href="/servicos" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Serviços</Link>
                        <Link href="/produtos" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Produtos</Link>
                        <Link href="/portfolio" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Portfólio</Link>
                        <Link href="/blog" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link href="/contato" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Contato</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
