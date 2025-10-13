import { Button } from "@/components/ui/button";
import { ArrowRightIcon, DownloadIcon, CalendarIcon } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import sharathPortrait from "@/assets/sharath-portrait.jpg";
const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional consultation and automation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white lg:text-left text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Sharath Nakka</span>
              <span className="block text-2xl md:text-3xl font-medium text-white/90 mt-4">
                Power Platform Developer & AI Innovator
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Helping Businesses Automate, Visualize, and Grow with Power Platform & AI
            </p>

            <div className="text-lg mb-12 text-white/80 max-w-2xl">
              <p>
                Transform your business operations with intelligent automation, powerful data visualization, 
                and AI-driven insights. I help companies save time, reduce costs, and make smarter decisions 
                through cutting-edge Microsoft Power Platform solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <Button variant="professional" size="xl" className="group">
                <CalendarIcon size={20} />
                Book Consultation
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <DownloadIcon size={20} />
                Download Resume
              </Button>
            </div>
            
            <div className="mt-8">
              <Button variant="link" size="xl" className="text-white hover:text-white/80">Insights.nakka@outlook.com</Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:flex justify-center lg:justify-end hidden">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-strong">
                <img src={sharathPortrait} alt="Sharath Nakka - Power Platform Developer" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/60">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">$2M+</div>
            <div className="text-sm">Cost Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">90%</div>
            <div className="text-sm">Process Efficiency Improvement</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;