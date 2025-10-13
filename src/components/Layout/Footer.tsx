import { Link } from "react-router-dom";
import { LinkedinIcon, GithubIcon, MailIcon, DownloadIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Sharath Nakka</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Helping Businesses Automate, Visualize, and Grow with Power Platform & AI. 
              Transforming complex processes into simple, efficient solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/sharathnakka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/sharathnakka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="mailto:sharath@example.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-smooth">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2">
                  <DownloadIcon size={16} />
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:sharath@example.com" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Email Me
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Book Consultation
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Sharath Nakka. All rights reserved. Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;