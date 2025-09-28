import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero badge */}
          <div className="fade-in-up mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-elegant">
              <CheckCircle className="w-4 h-4 mr-2" />
              Trusted by 10,000+ businesses worldwide
            </div>
          </div>

          {/* Main headline */}
          <div className="fade-in-up stagger-1 mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Business
              </span>{" "}
              with Professional Solutions
            </h1>
          </div>

          {/* Subtitle */}
          <div className="fade-in-up stagger-2 mb-10">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge digital solutions that drive growth, 
              enhance efficiency, and create lasting competitive advantages 
              for modern businesses.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary shadow-glow hover:shadow-elegant transition-smooth text-lg px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 transition-smooth hover:shadow-card">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="fade-in-up stagger-4 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground mt-1">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};