import { Headphones, Sparkles, MonitorCog, ShieldCheck, Network, Wrench, PackageCheck, RefreshCw, ShieldAlert, Cpu, HardDrive, Fingerprint, Camera } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Headphones,
    title: "PC Technical Support",
    description: "Comprehensive technical assistance for all your computer-related issues with prompt response and expert solutions."
  },
  {
    icon: Sparkles,
    title: "PC Cleaning Services",
    description: "Professional cleaning and maintenance to keep your PC running smoothly and extend its lifespan."
  },
  {
    icon: MonitorCog,
    title: "PC Setup & Installation",
    description: "Complete setup and configuration of new systems, ensuring optimal performance from day one."
  },
  {
    icon: ShieldCheck,
    title: "System Security Testing",
    description: "Thorough security audits and vulnerability assessments to protect your systems from threats."
  },
  {
    icon: Network,
    title: "Networking Services",
    description: "Professional network setup, configuration, and troubleshooting for seamless connectivity."
  },
  {
    icon: Wrench,
    title: "Hardware Repair & Upgrades",
    description: "Expert hardware diagnostics, repairs, and upgrades to enhance your system's performance."
  },
  {
    icon: PackageCheck,
    title: "Software Repair & Upgrades",
    description: "Comprehensive software troubleshooting, updates, and installations for optimal functionality."
  },
  {
    icon: RefreshCw,
    title: "Operating System Updates",
    description: "Keep your system secure and efficient with the latest OS updates and patches."
  },
  {
    icon: ShieldAlert,
    title: "Anti-Virus Installation & Removal",
    description: "Professional antivirus solutions to protect your system from malware and security threats."
  },
  {
    icon: Cpu,
    title: "Motherboard Replacement",
    description: "Expert motherboard replacement and installation services with data preservation."
  },
  {
    icon: HardDrive,
    title: "Memory Upgrades",
    description: "Boost your system's performance with professional RAM upgrades and optimization."
  },
  {
    icon: Fingerprint,
    title: "Biometric Installation",
    description: "Advanced biometric security systems for enhanced access control and authentication."
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional CCTV camera installation and monitoring solutions for complete security coverage."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-36 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="fade-in-up mb-6">
            <span className="text-primary font-semibold text-base uppercase tracking-wider">Our Services</span>
          </div>
          <div className="fade-in-up stagger-1 mb-6">
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight tracking-tight">
              Comprehensive Solutions for{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Your Business
              </span>
            </h2>
          </div>
          <div className="fade-in-up stagger-2">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              We offer a full spectrum of technical services designed to keep your systems running 
              smoothly and securely.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className={`fade-in-up stagger-${index % 3 + 1}`}>
              <Card className="h-full group hover:shadow-hover transition-smooth border-border/40 hover:border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="space-y-4 p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};