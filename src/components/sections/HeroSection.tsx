
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = event;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center dots-pattern"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-fade-in">
            <span className="text-gradient-primary">Ram Siddesh M</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-foreground/80 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Computer Science Engineering Student
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <span className="bg-secondary px-4 py-1.5 rounded-full text-sm">Problem Solver</span>
            <span className="bg-secondary px-4 py-1.5 rounded-full text-sm">Full-Stack Developer</span>
            <span className="bg-secondary px-4 py-1.5 rounded-full text-sm">Data Enthusiast</span>
          </div>
          
          <div 
            className="flex items-center mb-8 border border-border px-4 py-2 rounded-lg bg-gradient-to-r from-background to-card animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            <span className="text-sm mr-2">CGPA:</span>
            <span className="text-lg font-semibold">9.0</span>
            <span className="inline-block w-2.5 h-2.5 bg-gradient-secondary rounded-full ml-2 animate-pulse-slow"></span>
          </div>
          
          <p 
            className="text-muted-foreground text-lg max-w-2xl animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            Sophomore at <span className="text-gradient-secondary">Sathyabama Institute of Science and Technology</span>
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
