import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Simple background */}
      <div className="absolute inset-0 z-0 gradient-hero"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="fade-in-up mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Available 24/7</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="fade-in-up mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-secondary dark:text-foreground">
              Professional{" "}
              <span className="text-primary">
                PC Technical Support
              </span>{" "}
              & Services
            </h1>
          </div>

          {/* Subtitle */}
          <div className="fade-in-up stagger-1 mb-10">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Expert solutions for all your computer needs - from repairs and upgrades 
              to security and networking services. Get professional help when you need it.
            </p>
          </div>

          {/* CTA Button */}
          <div className="fade-in-up stagger-2 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-hover transition-all text-base px-10 py-6 font-semibold rounded-full uppercase tracking-wide"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book A Call
            </Button>
          </div>

          {/* Stats */}
          <div className="fade-in-up stagger-3 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Done" },
              { number: "24/7", label: "Support" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary dark:text-foreground mb-1">
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