import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, TrendingUpIcon, ClockIcon, DollarSignIcon } from "lucide-react";
import { Link } from "react-router-dom";
import powerBiDemo from "@/assets/power-bi-demo.jpg";
import aiAutomation from "@/assets/ai-automation.jpg";
import businessSuccess from "@/assets/business-success.jpg";

const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      id: "insurance-claims-tracking",
      title: "Realtime Claims Tracking Dashboard",
      company: "Insurance Operations",
      description: "Provided instant visibility into claims processing with real-time dashboard, enabling 90% efficiency and 99.9% business benefit.",
      image: businessSuccess,
      metrics: [
        { icon: TrendingUpIcon, label: "Efficiency", value: "90%" },
        { icon: DollarSignIcon, label: "Business Benefit", value: "99.9%" },
        { icon: ClockIcon, label: "Report Generation", value: "2 days" }
      ],
      tags: ["Power BI", "Real-time Analytics", "Insurance"]
    },
    {
      id: "sla-breach-alert",
      title: "Proactive SLA Breach Alert System for Support Teams",
      company: "Support Operations",
      description: "Automated email alert system prevents SLA breaches by calculating expected completion times and triggering proactive notifications before deadlines.",
      image: aiAutomation,
      metrics: [
        { icon: TrendingUpIcon, label: "Productivity Boost", value: "99.9%" },
        { icon: DollarSignIcon, label: "Cost Saved", value: "$30K" },
        { icon: ClockIcon, label: "Solution Delivered", value: "3 days" }
      ],
      tags: ["Power Automate", "Alert System", "Support"]
    },
      ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how I've helped businesses transform their operations and achieve 
            measurable results through strategic automation and data visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-spring bg-card border-border overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white/80 text-sm">{study.company}</p>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {study.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={idx} className="text-center">
                        <IconComponent size={16} className="text-primary mx-auto mb-1" />
                        <div className="text-lg font-semibold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary-light text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link to={`/case-studies/${study.id}`}>
                  <Button variant="outline" className="w-full group">
                    View Full Case Study
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button variant="hero" size="lg">
              View All Case Studies
              <ArrowRightIcon size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
