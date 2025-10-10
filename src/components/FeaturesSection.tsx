import { Award, MessageCircle } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Certified Expertise */}
            <div className="fade-in-left text-white">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <Award className="h-12 w-12 text-white" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Certified Expertise
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Our team of certified professionals provides expert hardware and software 
                repairs, delivering top-tier solutions for every tech problem.
              </p>
            </div>

            {/* Instant Support */}
            <div className="fade-in-right text-white">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                  <MessageCircle className="h-12 w-12 text-white" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Instant Support & Live Chat
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Get expert assistance anytime, anywhere with our robust 24/7 live chat and 
                remote IT support, ensuring minimal downtime and maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
