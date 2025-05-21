
import React from 'react';
import { Github, Mail, PhoneCall } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ram Siddesh M. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:ramsid4407@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+917550292066" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Phone</span>
              <PhoneCall className="h-5 w-5" />
            </a>
            <a href="https://github.com/ramsiddesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
