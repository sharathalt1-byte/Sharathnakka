import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarIcon, ClockIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const categories = ["All", "AI in Business", "Power Platform", "Automation", "Growth Hacks"];
  
  const posts = [
    {
      id: "ai-business-transformation",
      title: "How AI is Transforming Business Operations in 2024",
      excerpt: "Discover the latest AI trends that are reshaping how companies operate, from automated decision-making to predictive analytics that help businesses stay competitive.",
      category: "AI in Business",
      readTime: "5 min read",
      publishDate: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: "power-platform-roi",
      title: "Calculating ROI for Power Platform Implementation",
      excerpt: "A comprehensive guide to measuring the financial impact of Power Platform solutions in your organization, including cost-benefit analysis frameworks.",
      category: "Power Platform",
      readTime: "8 min read",
      publishDate: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: "automation-success-metrics",
      title: "5 Key Metrics to Track Automation Success",
      excerpt: "Learn which KPIs matter most when implementing business process automation and how to measure them effectively to ensure maximum ROI.",
      category: "Automation",
      readTime: "6 min read",
      publishDate: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: "power-bi-best-practices",
      title: "Power BI Dashboard Design Best Practices",
      excerpt: "Create compelling, actionable dashboards that drive business decisions. Learn design principles that make data visualization truly effective.",
      category: "Power Platform",
      readTime: "7 min read",
      publishDate: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: "digital-transformation-strategy",
      title: "Building a Winning Digital Transformation Strategy",
      excerpt: "Step-by-step approach to planning and executing digital transformation initiatives that deliver measurable business value.",
      category: "Growth Hacks",
      readTime: "10 min read",
      publishDate: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: "ai-integration-challenges",
      title: "Overcoming Common AI Integration Challenges",
      excerpt: "Practical solutions to the most frequent obstacles businesses face when implementing AI solutions, from data quality to user adoption.",
      category: "AI in Business",
      readTime: "6 min read",
      publishDate: "Dec 3, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Business Insights & Strategies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Actionable insights on automation, AI implementation, and digital transformation 
                strategies that drive real business results.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <SearchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 h-12"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={index} 
                  className={`group hover:shadow-medium transition-spring bg-card border-border overflow-hidden ${
                    post.featured && index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden ${
                    post.featured && index === 0 ? 'h-80' : 'h-48'
                  }`}>
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
                      post.featured && index === 0 ? 'text-2xl' : 'text-xl'
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

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;