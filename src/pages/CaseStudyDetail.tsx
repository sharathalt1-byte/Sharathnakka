import { useParams } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircleIcon, TrendingUpIcon } from "lucide-react";
import { Link } from "react-router-dom";
import powerBiDemo from "@/assets/power-bi-demo.jpg";

const CaseStudyDetail = () => {
  const { id } = useParams();

  // Manufacturing Analytics Dashboard detailed content
  if (id === "manufacturing-analytics") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 gradient-subtle">
            <div className="container mx-auto px-6">
              <Link to="/case-studies">
                <Button variant="outline" className="mb-8">
                  <ArrowLeftIcon size={16} className="mr-2" />
                  Back to Case Studies
                </Button>
              </Link>
              
              <div className="max-w-4xl">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Manufacturing
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
                  Manufacturing Analytics Dashboard
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To address inefficiencies and high operational costs, a modern manufacturing company sought to improve its tracking and decision-making with a data-driven approach. I spearheaded the implementation of a Power BI dashboard, integrating diverse datasets from shop floor machines, inventory systems, and procurement. The dashboard provided actionable insights that led to significant cost savings of ₹500K.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <img 
                  src={powerBiDemo}
                  alt="Manufacturing Analytics Dashboard"
                  className="w-full rounded-lg shadow-strong"
                />
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Challenges</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 text-destructive">•</div>
                        <p className="text-muted-foreground">Lack of real-time visibility into production, quality, downtime, and inventory</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 text-destructive">•</div>
                        <p className="text-muted-foreground">Manual reporting delays caused missed savings opportunities</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 text-destructive">•</div>
                        <p className="text-muted-foreground">No centralized metrics for root-cause analysis of losses or wastage</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Solution: Power BI Manufacturing Analytics Dashboard</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Integration</h3>
                        <p className="text-muted-foreground">Connected Power BI to ERP, MES, and shop-floor sensors</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">KPIs Tracked</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Production yield</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Equipment downtime</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Scrap rates</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Inventory turnover</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">On-time delivery performance</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Procurement spend analysis</p>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Features</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Real-time alerts for downtime and scrap spikes</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Drill-through capability for line-by-line defect analysis</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Spend insights for negotiation opportunities</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Custom views for shift leaders, procurement heads, and plant managers</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="py-12 gradient-subtle">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Results & Impact</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Cost Savings</h3>
                      <p className="text-muted-foreground">Identified and mitigated repeat equipment failures, optimizing maintenance cycles and reducing downtime, saving <span className="font-bold text-primary">₹500K</span> within one year</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Process Improvement</h3>
                      <p className="text-muted-foreground">Enabled faster root-cause analysis leading to scrap reduction and process corrections</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Decision Acceleration</h3>
                      <p className="text-muted-foreground">Reduced manual reporting time from days to minutes with dynamic dashboards</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Visibility</h3>
                      <p className="text-muted-foreground">Empowered leadership with daily, weekly, and monthly trends to drive continuous improvement</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Sample Visuals */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Sample Visuals from Dashboard</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Production performance by time/line/machine</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Heatmap of downtime events</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Trend graph for scrap rates</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Procurement spend breakdown by category</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="py-12 gradient-subtle">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Quote from Plant Manager</h3>
                    <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                      "Since deploying the Power BI analytics dashboard, our team can spot and fix issues instantly. The clear visualization helped us save over ₹500,000 by cutting downtime and negotiating smarter deals."
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Lessons Learned</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Early stakeholder engagement ensures dashboard adoption</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Real-time integration drives cultural change toward proactive management</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Ongoing KPIs review keeps savings sustainable</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 gradient-subtle">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Manufacturing Data into Business Value?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact me for tailored analytics solutions that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Schedule Consultation
                </Button>
                <Link to="/case-studies">
                  <Button variant="professional" size="lg">
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  // Insurance Claims Tracking detailed content
  if (id === "insurance-claims-tracking") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 gradient-subtle">
            <div className="container mx-auto px-6">
              <Link to="/case-studies">
                <Button variant="outline" className="mb-8">
                  <ArrowLeftIcon size={16} className="mr-2" />
                  Back to Case Studies
                </Button>
              </Link>
              
              <div className="max-w-4xl">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Insurance
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
                  Realtime Claims Tracking Dashboard for Insurance Operations
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  In the insurance sector, teams struggled to keep track of how many claims came in and whether each was being processed within the promised Service Level Agreements (SLA). Managers lacked real-time visibility—making it difficult to identify delays, bottlenecks, or claims at risk of breaching SLA.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <img 
                  src={powerBiDemo}
                  alt="Claims Tracking Dashboard"
                  className="w-full rounded-lg shadow-strong"
                />
              </div>
            </div>
          </section>

          {/* Background */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Background</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      In the insurance sector, teams struggled to keep track of how many claims came in and whether each was being processed within the promised Service Level Agreements (SLA). Managers lacked real-time visibility—making it difficult to identify delays, bottlenecks, or claims at risk of breaching SLA.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">The Solution: Power BI Claims Dashboard</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      A dynamic, real-time Power BI dashboard was designed and launched to solve this exact problem. Here's how it works and why it's impactful:
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Instant Case Segregation</h3>
                        <p className="text-muted-foreground mb-3">The dashboard shows every claim received, sorted instantly into clear categories:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Processed (finished)</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Business Exception (needs review due to business issue)</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Technical Exception (needs IT support)</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Stuck Transactions (hasn't moved for a set time)</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Each case displays the exact date and time it was received</p>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Smart Performance Calculation</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Automatically calculates the Average Handle Time (AHT) for each claim type</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Uses this to estimate if newly received cases can be completed within SLA or could face delay</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Gives managers a "forecast" of claims approaching their deadlines</p>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Easy-to-Understand Visual Highlighters</h3>
                        <p className="text-muted-foreground mb-3">Uses Red, Amber, Green signals to show risk levels:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground"><span className="font-semibold">Green:</span> On track, no issues</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground"><span className="font-semibold">Amber:</span> Caution, nearing SLA deadline</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground"><span className="font-semibold">Red:</span> Action needed, breached or at high risk</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">Instantly highlights cases that need urgent attention</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Business Impact */}
          <section className="py-12 gradient-subtle">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Business Impact</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Total Visibility</h3>
                      <p className="text-muted-foreground">Managers now know at any minute: how many claims came in, the current status of each, and whether anything is at risk</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Faster Decisions</h3>
                      <p className="text-muted-foreground">The dashboard points out the exact cases needing attention so teams can act immediately—no more searching through spreadsheets</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">SLA Confidence</h3>
                      <p className="text-muted-foreground">With auto-calculation and real-time alerts, leadership can guarantee high service levels and avoid penalties for late processing</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Appealing Design</h3>
                      <p className="text-muted-foreground">Simple Red/Amber/Green visuals make data actionable—easy for anyone to use, even without technical expertise</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-primary mb-2">90%</div>
                      <p className="text-muted-foreground">Efficiency</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                      <p className="text-muted-foreground">Business Benefit</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-primary mb-2">2 Days</div>
                      <p className="text-muted-foreground">Report Generation</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="py-12 gradient-subtle">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Quote from Operations Manager</h3>
                    <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                      "This dashboard changed our claims processing game—what was once invisible and unpredictable is now clear, organized, and under control. We can ensure customers get their claims handled on time, every time."
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Summary</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This Power BI dashboard gave insurance teams rapid, smart insights into their claims processes, enabling better service to customers and control for business leaders.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 gradient-subtle">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Gain Real-Time Visibility into Your Operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact me for tailored analytics solutions that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Schedule Consultation
                </Button>
                <Link to="/case-studies">
                  <Button variant="professional" size="lg">
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  // SLA Breach Alert System detailed content
  if (id === "sla-breach-alert") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 gradient-subtle">
            <div className="container mx-auto px-6">
              <Link to="/case-studies">
                <Button variant="outline" className="mb-8">
                  <ArrowLeftIcon size={16} className="mr-2" />
                  Back to Case Studies
                </Button>
              </Link>
              
              <div className="max-w-4xl">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Support Operations
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
                  Proactive SLA Breach Alert System for Support Teams
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The Support Team had no visibility into which processes were at risk of breaching their SLA (Service Level Agreement). Without alerts or early warnings, issues were often discovered after the SLA had already been breached, leading to delays, missed deadlines, and reduced customer satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <img 
                  src={powerBiDemo}
                  alt="SLA Alert System"
                  className="w-full rounded-lg shadow-strong"
                />
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">🧩 Challenge</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 text-destructive">•</div>
                        <p className="text-muted-foreground">The Support Team had no visibility into which processes were at risk of breaching their SLA (Service Level Agreement)</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 text-destructive">•</div>
                        <p className="text-muted-foreground">There were no alerts or early warnings, so issues were often discovered after the SLA had already been breached</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 text-destructive">•</div>
                        <p className="text-muted-foreground">This led to delays, missed deadlines, and reduced customer satisfaction</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">💡 Solution</h2>
                    
                    <div className="space-y-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">Designed and implemented an automated email alert system using <span className="font-semibold text-foreground">Power Automate</span></p>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">The system intelligently calculates the expected time required to complete each incoming transaction</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">If the expected time exceeds the SLA limit, an email alert is triggered to notify the Support Team before the breach occurs</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">The email is beautifully designed using HTML and CSS, providing:</p>
                        </li>
                      </ul>
                      
                      <div className="ml-8 space-y-2">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-primary">→</div>
                            <p className="text-muted-foreground">Clear visual indicators</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-primary">→</div>
                            <p className="text-muted-foreground">Key insights into the transaction status</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-primary">→</div>
                            <p className="text-muted-foreground">Actionable information to prioritize tasks</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="py-12 gradient-subtle">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">🚀 Impact</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Proactive Response</h3>
                      <p className="text-muted-foreground">Support Team now receives timely alerts, allowing them to act proactively before SLA breaches occur</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Breach Reduction</h3>
                      <p className="text-muted-foreground">SLA breaches have been significantly reduced with <span className="font-bold text-primary">99.9% productivity boost</span></p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Enhanced Efficiency</h3>
                      <p className="text-muted-foreground">Improved team efficiency and response time with better visibility into transaction processing timelines</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <TrendingUpIcon size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Cost Savings</h3>
                      <p className="text-muted-foreground">Achieved <span className="font-bold text-primary">$30K cost savings</span> through improved operational efficiency</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">🎯 Benefits</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-foreground font-semibold mb-1">Prevention over reaction</p>
                          <p className="text-muted-foreground">Issues are addressed before they escalate</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-foreground font-semibold mb-1">Better resource management</p>
                          <p className="text-muted-foreground">Support Team can prioritize tasks based on urgency</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-foreground font-semibold mb-1">Improved customer satisfaction</p>
                          <p className="text-muted-foreground">SLAs are consistently met, enhancing customer trust and loyalty</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-foreground font-semibold mb-1">Scalable and maintainable</p>
                          <p className="text-muted-foreground">The system can be easily adapted for other processes or teams</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section className="py-12 gradient-subtle">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Metrics</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                      <p className="text-muted-foreground">Productivity Boost</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-primary mb-2">$30K</div>
                      <p className="text-muted-foreground">Cost Saved</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-primary mb-2">3 Days</div>
                      <p className="text-muted-foreground">Solution Delivered</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Quote from Support Operations Manager</h3>
                    <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                      "The proactive alert system has completely transformed how we manage SLAs. We no longer react to breaches—we prevent them. Our team feels more in control, and our customers are happier than ever."
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Summary</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This Power Automate-based alert system gave support teams the proactive visibility they needed to manage SLAs effectively. By intelligently calculating completion times and triggering timely alerts, the system prevented breaches, improved efficiency, and enhanced customer satisfaction—all delivered in just 3 days with measurable business impact of $30K in cost savings and 99.9% productivity boost.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 gradient-subtle">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Prevent SLA Breaches Before They Happen?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact me for proactive automation solutions that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Schedule Consultation
                </Button>
                <Link to="/case-studies">
                  <Button variant="professional" size="lg">
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  // Default fallback for other case studies
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Coming Soon</h1>
          <Link to="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
