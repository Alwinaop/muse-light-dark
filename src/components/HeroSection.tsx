import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-50"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="PC Technical Support" 
          className="w-full h-full object-cover opacity-[0.08] dark:opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="fade-in-up mb-8 inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shadow-elegant">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Available 24/7</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="fade-in-up mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.05] tracking-tight">
              Professional{" "}
              <span className="gradient-primary bg-clip-text text-transparent animate-glow">
                PC Technical Support
              </span>{" "}
              & Services
            </h1>
          </div>

          {/* Subtitle */}
          <div className="fade-in-up stagger-1 mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Expert solutions for all your computer needs - from repairs and upgrades 
              to security and networking services. Get professional help when you need it.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary shadow-glow hover:shadow-hover hover:scale-105 transition-all text-lg px-12 py-7 font-semibold rounded-2xl"
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
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-12 py-7 font-semibold rounded-2xl border-2 hover:bg-primary/5 transition-all"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="fade-in-up stagger-3 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Done" },
              { number: "24/7", label: "Support" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};