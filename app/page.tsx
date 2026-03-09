import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <TestimonialsSection />
            {/* Keeping Blog and Newsletter for now, maybe redesigned later or removed if requested */}
            <div className="w-full space-y-0 bg-transparent">
                <BlogSection />
                <Newsletter />
            </div>
        </main>
    );
}
