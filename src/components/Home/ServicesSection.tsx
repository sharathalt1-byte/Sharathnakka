import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Zap, Brain, Cog, TrendingUp, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Power BI Analytics",
      description: "Transform raw data into actionable business insights with interactive dashboards and real-time reporting.",
      benefits: ["Real-time KPI monitoring", "Custom dashboard creation", "Data storytelling"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with Power Automate to boost productivity and reduce errors.",
      benefits: ["Workflow optimization", "Task automation", "Integration solutions"]
    },
    {
      icon: Brain,
      title: "AI Implementation",
      description: "Deploy intelligent AI agents and machine learning solutions to enhance decision-making capabilities.",
      benefits: ["Predictive analytics", "Smart recommendations", "Automated insights"]
    },
    {
      icon: Cog,
      title: "Custom Power Apps",
      description: "Build tailored business applications without complex coding to solve specific operational challenges.",
      benefits: ["Custom app development", "Mobile-first design", "User-friendly interfaces"]
    },
    {
      icon: TrendingUp,
      title: "Business Optimization",
      description: "Identify efficiency opportunities and implement solutions that drive measurable business growth.",
      benefits: ["Performance analysis", "Cost reduction strategies", "Growth acceleration"]
    },
    {
      icon: Shield,
      title: "Data Governance",
      description: "Establish secure, compliant data management practices while maintaining accessibility and usability.",
      benefits: ["Security implementation", "Compliance management", "Data quality assurance"]
    }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Power Platform and AI solutions designed to transform 
            your business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-spring border-border bg-card hover:bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;