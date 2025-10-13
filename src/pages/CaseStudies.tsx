import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, TrendingUpIcon, ClockIcon, DollarSignIcon } from "lucide-react";
import { Link } from "react-router-dom";
import powerBiDemo from "@/assets/power-bi-demo.jpg";
import aiAutomation from "@/assets/ai-automation.jpg";
import businessSuccess from "@/assets/business-success.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "insurance-claims-tracking",
      title: "Realtime Claims Tracking Dashboard",
      company: "Insurance Operations",
      industry: "Insurance",
      description: "In the insurance sector, teams struggled to keep track of how many claims came in and whether each was being processed within the promised Service Level Agreements (SLA). A dynamic, real-time Power BI dashboard was designed to provide instant visibility into claims processing, enabling managers to identify delays, bottlenecks, or claims at risk of breaching SLA.",
      challenge: "Teams lacked real-time visibility into claims processing, making it difficult to identify delays, bottlenecks, or cases at risk of breaching SLA. Managers struggled with unpredictable processing timelines and no centralized system to track claim status.",
      solution: "Designed a real-time Power BI dashboard with instant case segregation (Processed, Business Exception, Technical Exception, Stuck Transactions), smart performance calculation using Average Handle Time (AHT), and visual Red/Amber/Green signals to show risk levels. The dashboard provided forecasts of claims approaching deadlines and highlighted cases needing urgent attention.",
      image: businessSuccess,
      metrics: [
        { icon: TrendingUpIcon, label: "Efficiency", value: "90%" },
        { icon: DollarSignIcon, label: "Business Benefit", value: "99.9%" },
        { icon: ClockIcon, label: "Report Generation", value: "2 days" }
      ],
      technologies: ["Power BI", "Real-time Analytics", "SLA Tracking", "AHT Calculation"],
      featured: true
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
    }
  ];

  const industries = ["All", "Technology", "Professional Services", "Financial Services", "Insurance"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how I've helped businesses across industries transform their operations 
                and achieve measurable results through strategic Power Platform implementations.
              </p>
            </div>

            {/* Industry Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={industry === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index} 
                  className={`group hover:shadow-strong transition-spring bg-card border-border overflow-hidden ${
                    study.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden ${study.featured ? 'h-80' : 'h-64'}`}>
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                        {study.industry}
                      </span>
                    </div>
                    {study.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className={`font-semibold mb-2 ${study.featured ? 'text-3xl' : 'text-xl'}`}>
                        {study.title}
                      </h3>
                      <p className="text-white/80">{study.company}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </CardDescription>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => {
                        const IconComponent = metric.icon;
                        return (
                          <div key={idx} className="text-center">
                            <IconComponent size={20} className="text-primary mx-auto mb-2" />
                            <div className="text-lg font-semibold text-foreground">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to={`/case-studies/${study.id}`}>
                      <Button variant="default" className="w-full group">
                        View Full Case Study
                        <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how similar solutions can be tailored to your business needs 
              and challenges. Schedule a consultation to explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="professional" size="lg">
                Download Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
