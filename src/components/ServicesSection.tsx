import { Headphones, Sparkles, MonitorCog, ShieldCheck, Network, Wrench, PackageCheck, RefreshCw, ShieldAlert, Cpu, HardDrive, Fingerprint, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cctvRepair from "@/assets/cctv-repair.jpg";
import pcSupport from "@/assets/services/pc-support.jpg";
import pcCleaning from "@/assets/services/pc-cleaning.jpg";
import pcSetup from "@/assets/services/pc-setup.jpg";
import securityTesting from "@/assets/services/security-testing.jpg";
import networking from "@/assets/services/networking.jpg";
import hardwareRepair from "@/assets/services/hardware-repair.jpg";
import softwareRepair from "@/assets/services/software-repair.jpg";
import osUpdates from "@/assets/services/os-updates.jpg";
import antivirus from "@/assets/services/antivirus.jpg";
import motherboard from "@/assets/services/motherboard.jpg";
import memoryUpgrade from "@/assets/services/memory-upgrade.jpg";
import biometric from "@/assets/services/biometric.jpg";
import cctv from "@/assets/services/cctv.jpg";

const services = [
  {
    icon: Headphones,
    title: "PC Technical Support",
    description: "Comprehensive technical assistance for all your computer-related issues with prompt response and expert solutions.",
    image: pcSupport
  },
  {
    icon: Sparkles,
    title: "PC Cleaning Services",
    description: "Professional cleaning and maintenance to keep your PC running smoothly and extend its lifespan.",
    image: pcCleaning
  },
  {
    icon: MonitorCog,
    title: "PC Setup & Installation",
    description: "Complete setup and configuration of new systems, ensuring optimal performance from day one.",
    image: pcSetup
  },
  {
    icon: ShieldCheck,
    title: "System Security Testing",
    description: "Thorough security audits and vulnerability assessments to protect your systems from threats.",
    image: securityTesting
  },
  {
    icon: Network,
    title: "Networking Services",
    description: "Professional network setup, configuration, and troubleshooting for seamless connectivity.",
    image: networking
  },
  {
    icon: Wrench,
    title: "Hardware Repair & Upgrades",
    description: "Expert hardware diagnostics, repairs, and upgrades to enhance your system's performance.",
    image: hardwareRepair
  },
  {
    icon: PackageCheck,
    title: "Software Repair & Upgrades",
    description: "Comprehensive software troubleshooting, updates, and installations for optimal functionality.",
    image: softwareRepair
  },
  {
    icon: RefreshCw,
    title: "Operating System Updates",
    description: "Keep your system secure and efficient with the latest OS updates and patches.",
    image: osUpdates
  },
  {
    icon: ShieldAlert,
    title: "Anti-Virus Installation & Removal",
    description: "Professional antivirus solutions to protect your system from malware and security threats.",
    image: antivirus
  },
  {
    icon: Cpu,
    title: "Motherboard Replacement",
    description: "Expert motherboard replacement and installation services with data preservation.",
    image: motherboard
  },
  {
    icon: HardDrive,
    title: "Memory Upgrades",
    description: "Boost your system's performance with professional RAM upgrades and optimization.",
    image: memoryUpgrade
  },
  {
    icon: Fingerprint,
    title: "Biometric Installation",
    description: "Advanced biometric security systems for enhanced access control and authentication.",
    image: biometric
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional CCTV camera installation and monitoring solutions for complete security coverage.",
    image: cctv
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary dark:text-foreground mb-6 leading-tight">
              Strategic <span className="text-primary">IT Support</span> for Your Business Growth
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From immediate IT assistance to comprehensive computer repairs, we handle 
              it all to keep your systems smooth, secure, and up-to-date.
            </p>
          </div>

          {/* Feature Image */}
          <div className="mb-16 fade-in-up">
            <img 
              src={cctvRepair}
              alt="CCTV Installation and Repair Services" 
              className="w-full rounded-2xl shadow-hover"
            />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="fade-in-up group hover:shadow-hover transition-all duration-300 border-border hover:border-primary/30 overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80"></div>
                </div>
                
                {/* Content */}
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors backdrop-blur-sm">
                    <service.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary dark:text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};