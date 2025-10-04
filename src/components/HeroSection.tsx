import laptopRepair from "@/assets/laptop-repair.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Simple background */}
      <div className="absolute inset-0 z-0 gradient-hero"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
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

              {/* Stats */}
              <div className="fade-in-up stagger-3 grid grid-cols-2 gap-8">
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

            {/* Image */}
            <div className="fade-in-right">
              <img 
                src={laptopRepair}
                alt="Laptop Repair Services" 
                className="w-full rounded-2xl shadow-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};