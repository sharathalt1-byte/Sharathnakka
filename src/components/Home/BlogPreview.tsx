import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const posts = [
    {
      id: "ai-business-transformation",
      title: "How AI is Transforming Business Operations in 2024",
      excerpt: "Discover the latest AI trends that are reshaping how companies operate, from automated decision-making to predictive analytics.",
      category: "AI in Business",
      readTime: "5 min read",
      publishDate: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: "power-platform-roi",
      title: "Calculating ROI for Power Platform Implementation",
      excerpt: "A comprehensive guide to measuring the financial impact of Power Platform solutions in your organization.",
      category: "Power Platform",
      readTime: "8 min read",
      publishDate: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: "automation-success-metrics",
      title: "5 Key Metrics to Track Automation Success",
      excerpt: "Learn which KPIs matter most when implementing business process automation and how to measure them effectively.",
      category: "Automation",
      readTime: "6 min read",
      publishDate: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Business Insights & Strategies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with actionable insights on automation, AI implementation, 
            and digital transformation strategies that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-medium transition-spring bg-card border-border overflow-hidden ${
                post.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${post.featured ? 'h-64' : 'h-48'}`}>
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className={`font-semibold text-foreground group-hover:text-primary transition-smooth ${
                  post.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <CalendarIcon size={14} />
                      {post.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <Link to={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full group">
                    Read Article
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="hero" size="lg">
              View All Articles
              <ArrowRightIcon size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;