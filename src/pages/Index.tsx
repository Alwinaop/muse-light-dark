import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
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
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="border-t border-border py-8 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Ashwin Systems. All rights reserved.
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <a 
                    href="mailto:ashwinsalessystems@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    aria-label="Email Ashwin Systems"
                  >
                    Contact
                  </a>
                  <a 
                    href="#services" 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Services
                  </a>
                  <a 
                    href="https://wa.me/919987670993" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    aria-label="Contact on WhatsApp"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
