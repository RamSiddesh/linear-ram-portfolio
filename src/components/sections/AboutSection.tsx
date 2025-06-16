
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const typeCode = async () => {
      if (!terminalRef.current) return;
      
      const codeLines = [
        'def introduce_myself():',
        '    name = "Ram Siddesh M"',
        '    skills = ["Python", "Full-Stack", "Data Analysis"]',
        '    interests = ["Problem Solving", "Basketball", "Tech"]',
        '    ',
        '    return {',
        '        "passion": "Building impactful solutions",',
        '        "approach": "Analytical thinking & creative coding",',
        '        "goal": "Mastering technical skills for innovation"',
        '    }',
        '',
        'me = introduce_myself()',
      ];
      
      const codeContainer = terminalRef.current.querySelector('.terminal-code') as HTMLElement;
      if (!codeContainer) return;
      
      codeContainer.innerHTML = '';
      
      for (const line of codeLines) {
        const codeLine = document.createElement('div');
        codeLine.classList.add('opacity-0');
        
        if (line.startsWith('#')) {
          codeLine.innerHTML = `<span class="text-emerald-400">${line}</span>`;
        } else if (line.includes('=')) {
          const parts = line.split('=');
          codeLine.innerHTML = `${parts[0]}=<span class="text-amber-400">${parts[1]}</span>`;
        } else if (line.includes('"')) {
          codeLine.innerHTML = line.replace(/"([^"]*)"/g, '<span class="text-emerald-400">"$1"</span>');
        } else if (line.includes('[')) {
          codeLine.innerHTML = line.replace(/\[(.*)\]/g, '[<span class="text-purple-400">$1</span>]');
        } else {
          codeLine.textContent = line;
        }
        
        codeContainer.appendChild(codeLine);
      }
      
      // Animate each line appearance
      const lines = codeContainer.querySelectorAll('div');
      for (let i = 0; i < lines.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 120));
        lines[i].classList.remove('opacity-0');
        lines[i].classList.add('opacity-100');
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        typeCode();
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    
    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I am a Computer Science Engineering student with a passion for <span className="text-gradient-primary">problem-solving</span> and <span className="text-gradient-primary">software development</span>. My approach combines analytical thinking with creative solutions to deliver impactful results.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              With a strong foundation in programming and data analysis, I enjoy tackling complex challenges and continuously expanding my technical expertise. I'm particularly interested in full-stack development and data science applications.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Language Proficiency</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Tamil</span>
                    <span className="text-sm text-muted-foreground">Native</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-gradient-primary h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">English</span>
                    <span className="text-sm text-muted-foreground">Fluent</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-gradient-primary h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={terminalRef}
            className="terminal-window h-full max-h-96"
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-amber-500"></div>
              <div className="terminal-dot bg-emerald-500"></div>
            </div>
            
            <div className="terminal-code font-mono text-sm space-y-1 transition-opacity duration-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
