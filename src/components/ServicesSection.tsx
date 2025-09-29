import { Headphones, Sparkles, MonitorCog, ShieldCheck, Network, Wrench, PackageCheck, RefreshCw, ShieldAlert, Cpu, HardDrive, Fingerprint, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Headphones,
    title: "PC Technical Support",
    description: "Comprehensive technical assistance for all your computer-related issues with prompt response and expert solutions.",
    features: ["Remote Support", "On-Site Service", "24/7 Availability"]
  },
  {
    icon: Sparkles,
    title: "PC Cleaning Services",
    description: "Professional cleaning and maintenance to keep your PC running smoothly and extend its lifespan.",
    features: ["Dust Removal", "Component Cleaning", "Performance Boost"]
  },
  {
    icon: MonitorCog,
    title: "PC Setup & Installation",
    description: "Complete setup and configuration of new systems, ensuring optimal performance from day one.",
    features: ["Hardware Assembly", "Software Installation", "System Configuration"]
  },
  {
    icon: ShieldCheck,
    title: "System Security Testing",
    description: "Thorough security audits and vulnerability assessments to protect your systems from threats.",
    features: ["Vulnerability Scanning", "Security Reports", "Risk Assessment"]
  },
  {
    icon: Network,
    title: "Networking Services",
    description: "Professional network setup, configuration, and troubleshooting for seamless connectivity.",
    features: ["Network Setup", "Wi-Fi Configuration", "Troubleshooting"]
  },
  {
    icon: Wrench,
    title: "Hardware Repair & Upgrades",
    description: "Expert hardware diagnostics, repairs, and upgrades to enhance your system's performance.",
    features: ["Component Testing", "Part Replacement", "Performance Tuning"]
  },
  {
    icon: PackageCheck,
    title: "Software Repair & Upgrades",
    description: "Comprehensive software troubleshooting, updates, and installations for optimal functionality.",
    features: ["Bug Fixes", "Software Updates", "Application Installation"]
  },
  {
    icon: RefreshCw,
    title: "Operating System Updates",
    description: "Keep your system secure and efficient with the latest OS updates and patches.",
    features: ["OS Installation", "Update Management", "Driver Updates"]
  },
  {
    icon: ShieldAlert,
    title: "Anti-Virus Installation & Removal",
    description: "Professional antivirus solutions to protect your system from malware and security threats.",
    features: ["Virus Removal", "Antivirus Setup", "Real-time Protection"]
  },
  {
    icon: Cpu,
    title: "Motherboard Replacement",
    description: "Expert motherboard replacement and installation services with data preservation.",
    features: ["Board Diagnosis", "Replacement", "Data Migration"]
  },
  {
    icon: HardDrive,
    title: "Memory Upgrades",
    description: "Boost your system's performance with professional RAM upgrades and optimization.",
    features: ["RAM Installation", "Compatibility Check", "Performance Testing"]
  },
  {
    icon: Fingerprint,
    title: "Biometric Installation",
    description: "Advanced biometric security systems for enhanced access control and authentication.",
    features: ["Fingerprint Scanners", "Face Recognition", "Access Control"]
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional CCTV camera installation and monitoring solutions for complete security coverage.",
    features: ["Camera Setup", "Remote Monitoring", "Storage Solutions"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="fade-in-up mb-4">
            <span className="text-primary font-semibold text-lg">Our Services</span>
          </div>
          <div className="fade-in-up stagger-1 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Comprehensive Solutions for{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Modern Business
              </span>
            </h2>
          </div>
          <div className="fade-in-up stagger-2">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a full spectrum of digital services designed to accelerate your business growth 
              and establish a strong online presence.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className={`fade-in-up stagger-${index % 3 + 1}`}>
              <Card className="h-full group hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="fade-in-up">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to take your business to the next level?
            </p>
            <button className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-smooth">
              Explore All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};