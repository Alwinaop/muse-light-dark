import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Contact Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary dark:text-foreground mb-6 leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to solve your tech problems? Contact us today and let our experts help you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-in-left space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-secondary dark:text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href="mailto:ashwinsalessystems@gmail.com" className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary dark:text-foreground mb-1">Email</p>
                      <p className="text-muted-foreground">ashwinsalessystems@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="tel:+919987670993" className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary dark:text-foreground mb-1">Phone</p>
                      <p className="text-muted-foreground">+91 9987670993</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919987670993" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary dark:text-foreground mb-1">WhatsApp</p>
                      <p className="text-muted-foreground">+91 9987670993</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-right">
              <Card className="shadow-card border-border bg-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-secondary dark:text-foreground">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required
                          className="transition-smooth border-input focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-secondary dark:text-foreground">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required
                          className="transition-smooth border-input focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-secondary dark:text-foreground">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help?" 
                        required
                        className="transition-smooth border-input focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-secondary dark:text-foreground">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your needs..." 
                        rows={5}
                        required
                        className="transition-smooth resize-none border-input focus:border-primary"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-hover transition-all font-semibold"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
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