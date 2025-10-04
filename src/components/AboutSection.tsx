import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="fade-in-up text-center">
              <div className="mb-4">
                <span className="text-primary font-semibold uppercase tracking-wide text-sm">About Us</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary dark:text-foreground mb-6 leading-tight">
                Repair & Upgrade. Software Solution. Network Configuration.
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Ashwin Systems, we offer dependable IT support and computer repair services 
                tailored to your needs. Our certified team, with extensive experience, expertly 
                handles everything from hardware repairs and software troubleshooting to data 
                recovery and network configuration, ensuring your systems remain secure and 
                efficiently operational.
              </p>

              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-hover transition-all font-semibold group"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
