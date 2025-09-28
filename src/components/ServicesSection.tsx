import { Code, Palette, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers while providing exceptional user experiences.",
    features: ["User Research", "Prototyping", "Brand Identity"]
  },
  {
    icon: Zap,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies that drive traffic, generate leads, and boost your online presence.",
    features: ["Social Media", "Content Strategy", "PPC Campaigns"]
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Robust security measures to protect your business data and ensure compliance with industry standards.",
    features: ["Data Protection", "Threat Monitoring", "Compliance"]
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Advanced analytics and reporting to help you make data-driven decisions and optimize performance.",
    features: ["Real-time Data", "Custom Reports", "Performance Metrics"]
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert guidance and strategic planning to help your business navigate digital transformation challenges.",
    features: ["Strategy Planning", "Process Optimization", "Team Training"]
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