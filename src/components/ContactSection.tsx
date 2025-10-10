import { Mail, Phone, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Contact Us</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary dark:text-foreground mb-6 leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to solve your tech problems? Contact us today and let our experts help you.
            </p>
          </div>

          <div className="fade-in-up max-w-2xl mx-auto">
            <div className="space-y-6">
              <a 
                href="mailto:ashwinsalessystems@gmail.com" 
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                data-testid="link-email"
                aria-label="Send email to Ashwin Systems at ashwinsalessystems@gmail.com"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-secondary dark:text-foreground mb-1">Email</p>
                  <p className="text-muted-foreground break-all text-sm sm:text-base">ashwinsalessystems@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+919987670993" 
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                data-testid="link-phone"
                aria-label="Call Ashwin Systems at +91 9987670993"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
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
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                data-testid="link-whatsapp"
                aria-label="Message Ashwin Systems on WhatsApp"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-secondary dark:text-foreground mb-1">WhatsApp</p>
                  <p className="text-muted-foreground">+91 9987670993</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};