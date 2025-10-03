import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Initialize animations on mount
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('animate');
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <ServicesSection />
          <CTASection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="border-t border-border py-8 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Ashwin Systems. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
