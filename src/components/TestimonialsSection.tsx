import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "FixoPro's expert technicians resolved our server issues quickly and efficiently. Their 24/7 support has been invaluable for our business operations.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "IT Manager",
      content: "Outstanding service! The team's technical expertise and professionalism exceeded our expectations. Highly recommend for any IT needs.",
      rating: 5
    },
    {
      name: "David Martinez",
      role: "Entrepreneur",
      content: "From hardware repairs to software solutions, they handle everything with precision. The best IT support service we've worked with.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary dark:bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              What Our <span className="text-primary">Client Say</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="fade-in-up bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/90 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
