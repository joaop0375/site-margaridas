"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2, Upload } from "lucide-react";

type PortfolioItem = {
    title: string;
    category: string;
    images: string[];
};

export default function AdminPage() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("adminAuth");
        if (auth === "margaridas2026") {
            setIsAuthenticated(true);
            fetchItems();
        }
    }, []);

    const fetchItems = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/portfolio");
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Failed to fetch items:", error);
        }
        setLoading(false);
    };

    const saveItems = async (newItems: PortfolioItem[]) => {
        try {
            await fetch("/api/portfolio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newItems),
            });
            setItems(newItems);
        } catch (error) {
            console.error("Failed to save items:", error);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "margaridas2026") {
            localStorage.setItem("adminAuth", password);
            setIsAuthenticated(true);
            fetchItems();
        } else {
            alert("Senha incorreta");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminAuth");
        setIsAuthenticated(false);
        setPassword("");
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, itemIndex: number) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (data.url) {
                const newItems = [...items];
                newItems[itemIndex].images.push(data.url);
                await saveItems(newItems);
            }
        } catch (error) {
            console.error("Upload failed", error);
            alert("Falha no upload da imagem");
        }
        setLoading(false);
    };

    const handleDeleteImage = async (itemIndex: number, imageIndex: number) => {
        if (!confirm("Tem certeza que deseja excluir esta imagem?")) return;
        
        setLoading(true);
        const imageUrl = items[itemIndex].images[imageIndex];
        
        try {
            await fetch(`/api/upload?path=${encodeURIComponent(imageUrl)}`, {
                method: "DELETE",
            });
            
            const newItems = [...items];
            newItems[itemIndex].images.splice(imageIndex, 1);
            await saveItems(newItems);
        } catch (error) {
            console.error("Delete failed", error);
            alert("Falha ao excluir a imagem");
        }
        setLoading(false);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
                <form onSubmit={handleLogin} className="bg-card p-8 rounded-2xl shadow-xl w-full max-w-md border border-border/50">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-serif font-bold text-primary mb-2">Acesso Restrito</h1>
                        <p className="text-sm text-muted-foreground">Painel Administrativo do Portfólio</p>
                    </div>
                    <div className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha de acesso"
                            className="w-full h-11 px-4 rounded-md border border-input bg-background outline-none focus:border-primary"
                        />
                        <Button type="submit" className="w-full h-11 font-medium">Entrar no Painel</Button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            <div className="flex justify-between items-center mb-10 pb-4 border-b">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-primary">Gerenciar Portfólio</h1>
                    <p className="text-muted-foreground mt-1">Adicione ou remova imagens de cada serviço.</p>
                </div>
                <Button variant="outline" onClick={handleLogout}>Sair</Button>
            </div>

            {loading && (
                <div className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-card px-6 py-4 rounded-lg shadow-lg border font-medium">Salvando alterações...</div>
                </div>
            )}

            <div className="space-y-12">
                {items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-card border rounded-xl overflow-hidden shadow-sm p-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">{item.category}</span>
                                <h2 className="text-xl font-bold mt-2">{item.title}</h2>
                            </div>
                            <label className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2">
                                <Upload className="w-4 h-4" /> Adicionar Foto
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => handleUpload(e, itemIndex)}
                                />
                            </label>
                        </div>
                        
                        {item.images.length === 0 ? (
                            <div className="text-center p-8 bg-muted/20 rounded-lg border border-dashed text-muted-foreground">
                                Nenhuma imagem cadastrada para este serviço.
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {item.images.map((img, imgIndex) => (
                                    <div key={imgIndex} className="group relative aspect-square rounded-lg overflow-hidden border bg-muted/10">
                                        <Image
                                            src={img}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button
                                                onClick={() => handleDeleteImage(itemIndex, imgIndex)}
                                                className="bg-destructive text-destructive-foreground p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                                                title="Excluir imagem"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
