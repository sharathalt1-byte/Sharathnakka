import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClockIcon, DollarSignIcon, TrendingUpIcon, ShieldIcon, LightbulbIcon, UsersIcon } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSignIcon,
      title: "Cost Reduction",
      description: "Save 30-50% on operational costs",
      details: "Eliminate manual processes, reduce errors, and optimize resource allocation through intelligent automation.",
      color: "text-green-600"
    },
    {
      icon: ClockIcon,
      title: "Time Efficiency",
      description: "Reduce task completion time by 70%",
      details: "Automate repetitive workflows and streamline business processes to focus on high-value activities.",
      color: "text-blue-600"
    },
    {
      icon: TrendingUpIcon,
      title: "Data-Driven Decisions",
      description: "Make smarter business choices",
      details: "Access real-time insights and predictive analytics to guide strategic decisions with confidence.",
      color: "text-purple-600"
    },
    {
      icon: ShieldIcon,
      title: "Enhanced Security",
      description: "Enterprise-grade data protection",
      details: "Implement robust security measures and compliance standards while maintaining accessibility.",
      color: "text-red-600"
    },
    {
      icon: LightbulbIcon,
      title: "Innovation Acceleration",
      description: "Fast-track digital transformation",
      details: "Rapidly deploy modern solutions that adapt to changing business needs and market conditions.",
      color: "text-yellow-600"
    },
    {
      icon: UsersIcon,
      title: "Improved User Experience",
      description: "Enhance employee productivity",
      details: "Create intuitive interfaces and automated workflows that employees actually want to use.",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Businesses Gain
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable outcomes that directly impact your bottom line and operational efficiency. 
            Here's what companies achieve when they partner with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-spring bg-white border-border relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-10 translate-x-10"></div>
                
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-spring`}>
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-soft">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how these solutions can be tailored to your specific business needs 
            and challenges. Schedule a consultation to explore the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:sharath@example.com"
              className="inline-flex items-center justify-center h-11 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary-dark shadow-soft hover:shadow-medium rounded-md font-medium transition-smooth"
            >
              Start the Conversation
            </a>
            <a 
              href="#"
              className="inline-flex items-center justify-center h-11 px-6 py-2 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-soft hover:shadow-medium rounded-md font-medium transition-smooth"
            >
              View My Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;