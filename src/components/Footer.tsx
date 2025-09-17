import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:tishasoumya@gmail.com"
              className="flex items-center justify-center w-10 h-10 bg-background/10 hover:bg-primary rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-background/10 hover:bg-primary rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-background/10 hover:bg-primary rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-background/80">
              © 2025 Tisha Soumya. All rights reserved.
            </p>
            <p className="text-background/60 flex items-center justify-center text-sm">
              Made with <Heart className="w-4 h-4 mx-1 text-primary" /> and lots of coffee
            </p>
          </div>

          {/* Decorative element */}
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;