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
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="fade-in-up mb-4">
            <span className="text-primary font-semibold text-lg">Get in Touch</span>
          </div>
          <div className="fade-in-up stagger-1 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Get in{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
          </div>
          <div className="fade-in-up stagger-2">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions or need assistance? Contact us and we'll get back to you promptly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="mailto:ashwinsalessystems@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent transition-smooth group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-smooth">Email</h4>
                    <p className="text-muted-foreground">ashwinsalessystems@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+919987670993"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent transition-smooth group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-smooth">Phone</h4>
                    <p className="text-muted-foreground">+91 9987670993</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919987670993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent transition-smooth group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-smooth">WhatsApp</h4>
                    <p className="text-muted-foreground">+91 9987670993</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
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
                    className="w-full gradient-primary shadow-glow hover:shadow-elegant transition-smooth"
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
    </section>
  );
};