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
                  Computer, CCTV & <span className="text-primary">Technical Repair</span> Services
                </h1>
              </div>

              {/* Subtitle */}
              <div className="fade-in-up stagger-1">
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  Professional computer repair, CCTV installation, and technical support services. 
                  From hardware repairs to complete security system setups, we provide expert solutions 
                  for all your technology needs. Reliable service you can trust.
                </p>
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