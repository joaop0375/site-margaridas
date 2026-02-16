export function Footer() {
    return (
        <footer className="border-t bg-muted/40 py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-2xl px-4">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} Margaridas Beauty. Todos os direitos reservados.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <a href="https://www.instagram.com/_margaridasbeauty/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                    <a href="https://www.facebook.com/profile.php?id=61583322231164" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                </div>
            </div>
        </footer>
    );
}
