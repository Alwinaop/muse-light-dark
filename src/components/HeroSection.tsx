import laptopRepair from "@/assets/laptop-repair.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-background">
      {/* Simple background */}
      <div className="absolute inset-0 z-0 gradient-hero"></div>
      
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content */}
            <div>
              {/* Main headline */}
              <div className="fade-in-up mb-4 lg:mb-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-secondary dark:text-foreground">
                  Computer, CCTV & <span className="text-primary">Technical Repair</span> Services
                </h1>
              </div>

              {/* Subtitle */}
              <div className="fade-in-up stagger-1">
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Professional computer repair, CCTV installation, and technical support services. 
                  From hardware repairs to complete security system setups, we provide expert solutions 
                  for all your technology needs. Reliable service you can trust.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="fade-in-right lg:pl-8">
              <img 
                src={laptopRepair}
                alt="Professional laptop repair services showing technician working on computer hardware diagnostics and troubleshooting" 
                className="w-full rounded-2xl shadow-hover max-h-[500px] object-cover"
                loading="eager"
                width="800"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};