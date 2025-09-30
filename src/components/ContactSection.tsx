import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="fade-in-up mb-6">
            <span className="text-primary font-semibold text-base uppercase tracking-wider">Get in Touch</span>
          </div>
          <div className="fade-in-up stagger-1 mb-6">
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight tracking-tight">
              Get in{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
          </div>
          <div className="fade-in-up stagger-2">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Have questions or need assistance? Contact us and we'll get back to you promptly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-heading font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:ashwinsalessystems@gmail.com"
                  className="flex items-center space-x-5 p-6 rounded-2xl glass-card border-2 border-border/40 hover:border-primary/50 hover:shadow-card transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    <Mail className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-smooth">Email</h4>
                    <p className="text-muted-foreground">ashwinsalessystems@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+919987670993"
                  className="flex items-center space-x-5 p-6 rounded-2xl glass-card border-2 border-border/40 hover:border-secondary/50 hover:shadow-card transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    <Phone className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-secondary transition-smooth">Phone</h4>
                    <p className="text-muted-foreground">+91 9987670993</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919987670993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 p-6 rounded-2xl glass-card border-2 border-border/40 hover:border-accent/50 hover:shadow-card transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    <MessageCircle className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-accent transition-smooth">WhatsApp</h4>
                    <p className="text-muted-foreground">+91 9987670993</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <div className="relative group">
              <div className="absolute inset-0 gradient-primary rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              <Card className="shadow-elegant border-2 border-primary/20 glass-card relative">
                <CardHeader className="space-y-2 p-8">
                  <CardTitle className="text-2xl font-heading font-semibold">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="transition-smooth focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="transition-smooth focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="transition-smooth focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="transition-smooth focus:ring-primary/20"
                    />
                  </div>

                    <Button 
                      type="submit" 
                      className="w-full gradient-primary shadow-glow hover:shadow-hover hover:scale-[1.02] transition-all font-semibold rounded-2xl"
                      size="lg"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};