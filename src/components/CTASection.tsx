import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-16 bg-secondary dark:bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-hover transition-all text-base px-10 py-6 font-bold rounded-full uppercase tracking-wider"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            BOOK A CALL
          </Button>
        </div>
      </div>
    </section>
  );
};
