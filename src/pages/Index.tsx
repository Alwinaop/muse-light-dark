import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
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
          <ServicesSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="border-t border-border py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
                Ashwin Systems
              </div>
              <p className="text-muted-foreground mb-6">
                Transforming businesses through innovative digital solutions
              </p>
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <span>© 2024 Ashwin Systems. All rights reserved.</span>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
