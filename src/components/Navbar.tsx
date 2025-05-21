
import React, { useState, useEffect, useRef } from 'react';
import { Command } from 'lucide-react';
import { cn } from '@/lib/utils';
import CommandPalette from './CommandPalette';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'education', 'contact'];
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setCommandOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <>
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
            
            <button
              onClick={() => setCommandOpen(true)}
              className="p-1.5 rounded-md bg-secondary flex items-center text-xs text-muted-foreground hover:text-foreground group transition-colors"
            >
              <Command className="w-3.5 h-3.5 mr-1.5 group-hover:text-accent transition-colors" />
              <span className="hidden sm:inline mr-1">Command</span>
              <kbd className="ml-1.5 text-[10px] py-0.5 px-1 rounded bg-muted text-muted-foreground font-mono">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </nav>
      
      {commandOpen && (
        <CommandPalette 
          isOpen={commandOpen} 
          setIsOpen={setCommandOpen} 
          sections={sections}
        />
      )}
    </>
  );
};

export default Navbar;
