import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="PC Technical Support" 
          className="w-full h-full object-cover opacity-[0.15] dark:opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/95 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <div className="fade-in-up mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tight">
              Professional{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                PC Technical Support
              </span>{" "}
              & Services
            </h1>
          </div>

          {/* Subtitle */}
          <div className="fade-in-up stagger-1 mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Expert solutions for all your computer needs - from repairs and upgrades 
              to security and networking services.
            </p>
          </div>

          {/* CTA Button */}
          <div className="fade-in-up stagger-2 flex justify-center">
            <Button 
              size="lg" 
              className="gradient-primary shadow-glow hover:shadow-hover transition-smooth text-lg px-12 py-7 font-semibold rounded-xl"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};