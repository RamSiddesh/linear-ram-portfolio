
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'education', 'contact'];
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={cn(
      "fixed top-0 w-full z-40 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-lg font-medium">Ram Siddesh M</a>
          
          <div className="hidden md:flex space-x-8">
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="text-muted-foreground hover:text-foreground font-medium text-sm tracking-wide transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
