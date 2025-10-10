import { Headphones, Sparkles, MonitorCog, ShieldCheck, Network, Wrench, PackageCheck, RefreshCw, ShieldAlert, Cpu, HardDrive, Fingerprint, Camera, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pcSupportImg from "@/assets/services/pc-support.jpg";
import pcCleaningImg from "@/assets/services/pc-cleaning.jpg";
import pcSetupImg from "@/assets/services/pc-setup.jpg";
import securityTestingImg from "@/assets/services/security-testing.jpg";
import networkingImg from "@/assets/services/networking.jpg";
import hardwareRepairImg from "@/assets/services/hardware-repair.jpg";
import softwareRepairImg from "@/assets/services/software-repair.jpg";
import osUpdatesImg from "@/assets/services/os-updates.jpg";
import antivirusImg from "@/assets/services/antivirus.jpg";
import motherboardImg from "@/assets/services/motherboard.jpg";
import memoryUpgradeImg from "@/assets/services/memory-upgrade.jpg";
import biometricImg from "@/assets/services/biometric.jpg";
import cctvImg from "@/assets/services/cctv.jpg";

const services = [
  {
    icon: Headphones,
    title: "PC Technical Support",
    description: "Comprehensive technical assistance for all your computer-related issues with prompt response and expert solutions.",
    image: pcSupportImg
  },
  {
    icon: Sparkles,
    title: "PC Cleaning Services",
    description: "Professional cleaning and maintenance to keep your PC running smoothly and extend its lifespan.",
    image: pcCleaningImg
  },
  {
    icon: MonitorCog,
    title: "PC Setup & Installation",
    description: "Complete setup and configuration of new systems, ensuring optimal performance from day one.",
    image: pcSetupImg
  },
  {
    icon: ShieldCheck,
    title: "System Security Testing",
    description: "Thorough security audits and vulnerability assessments to protect your systems from threats.",
    image: securityTestingImg
  },
  {
    icon: Network,
    title: "Networking Services",
    description: "Professional network setup, configuration, and troubleshooting for seamless connectivity.",
    image: networkingImg
  },
  {
    icon: Wrench,
    title: "Hardware Repair & Upgrades",
    description: "Expert hardware diagnostics, repairs, and upgrades to enhance your system's performance.",
    image: hardwareRepairImg
  },
  {
    icon: PackageCheck,
    title: "Software Repair & Upgrades",
    description: "Comprehensive software troubleshooting, updates, and installations for optimal functionality.",
    image: softwareRepairImg
  },
  {
    icon: RefreshCw,
    title: "Operating System Updates",
    description: "Keep your system secure and efficient with the latest OS updates and patches.",
    image: osUpdatesImg
  },
  {
    icon: ShieldAlert,
    title: "Anti-Virus Installation & Removal",
    description: "Professional antivirus solutions to protect your system from malware and security threats.",
    image: antivirusImg
  },
  {
    icon: Cpu,
    title: "Motherboard Replacement",
    description: "Expert motherboard replacement and installation services with data preservation.",
    image: motherboardImg
  },
  {
    icon: HardDrive,
    title: "Memory Upgrades",
    description: "Boost your system's performance with professional RAM upgrades and optimization.",
    image: memoryUpgradeImg
  },
  {
    icon: Fingerprint,
    title: "Biometric Installation",
    description: "Advanced biometric security systems for enhanced access control and authentication.",
    image: biometricImg
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional CCTV camera installation and monitoring solutions for complete security coverage.",
    image: cctvImg
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-20 relative overflow-hidden bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Our Services</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary dark:text-foreground mb-6 leading-tight">
              Strategic <span className="text-primary">IT Support</span> for Your Business Growth
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From immediate IT assistance to comprehensive computer repairs, we handle 
              it all to keep your systems smooth, secure, and up-to-date.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const whatsappMessage = encodeURIComponent(`Hi! I'm interested in ${service.title}. Can you provide more details?`);
              const whatsappLink = `https://wa.me/919987670993?text=${whatsappMessage}`;
              
              return (
                <Card 
                  key={index}
                  className="fade-in-up group hover:shadow-hover transition-all duration-300 bg-card border-border hover:border-primary/30 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`card-service-${index}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.title} - ${service.description}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      width="400"
                      height="192"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 inline-flex p-3 rounded-xl bg-primary/90 backdrop-blur-sm">
                      <service.icon className="h-6 w-6 text-white" strokeWidth={2} aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 
                      className="text-xl font-heading font-bold text-secondary dark:text-foreground mb-3 group-hover:text-primary transition-colors"
                      data-testid={`text-service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-muted-foreground leading-relaxed mb-4"
                      data-testid={`text-service-description-${index}`}
                    >
                      {service.description}
                    </p>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`button-book-${index}`}
                    >
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        size="sm"
                        aria-label={`Book ${service.title} service on WhatsApp`}
                      >
                        <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                        Book Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};