import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import techNews from "@/assets/tech-news.jpg";

export const BlogSection = () => {
  const posts = [
    {
      image: techNews,
      date: "January 7, 2025",
      title: "Keep Your Data Safe with FixPro's Backup and Recovery Solutions",
      excerpt: "Learn how to protect your valuable data with our comprehensive backup and recovery services."
    },
    {
      image: techNews,
      date: "January 5, 2025",
      title: "Essential Computer Maintenance Tips for 2025",
      excerpt: "Discover the best practices to keep your computer running smoothly throughout the year."
    },
    {
      image: techNews,
      date: "January 3, 2025",
      title: "Understanding Network Security: A Complete Guide",
      excerpt: "Everything you need to know about securing your network infrastructure."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">News, Tips, & Tutorials</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary dark:text-foreground mb-6 leading-tight">
              Tech Talk: <span className="text-primary">Tips, Tricks, and Trends</span>
            </h2>
            <Button 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card 
                key={index}
                className="fade-in-up overflow-hidden border-border hover:shadow-hover transition-all group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary dark:text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
