
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Highlighting my technical capabilities and problem-solving approach
        </p>
        
        <div className="border border-gradient-primary rounded-xl overflow-hidden bg-card transition-all hover:shadow-[0_0_15px_rgba(94,90,255,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
            <div className="lg:col-span-3 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border">
              <div>
                <h3 className="text-2xl font-bold mb-3">CGPA Calculator</h3>
                <p className="text-muted-foreground mb-6">
                  A comprehensive web application for university students to calculate their CGPA with dual-mode support.
                </p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {[
                      'Dual mode calculator (Sathyabama & SRM)',
                      'Firebase authentication and Firestore database',
                      'Dynamic semester/subject management',
                      'Real-time credit-weighted computation',
                      'Protected routes and secure user authentication',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="linear-dot bg-gradient-primary mt-1.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'Firebase', 'CSS Modules', 'Context API'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-secondary rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ramsiddesh/cgpa-calculator" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View Source
                  </a>
                  <a 
                    href="https://ramsiddesh.github.io/cgpa-calculator/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col">
              <div className="mb-4">
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Project Overview
                </h4>
                <div className="terminal-window h-full">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-amber-500"></div>
                    <div className="terminal-dot bg-emerald-500"></div>
                  </div>
                  <div className="font-mono text-xs mt-4 space-y-1">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">calculateCGPA</span> <span className="text-foreground">=</span> <span className="text-yellow-300">(subjects)</span> <span className="text-foreground">=&gt;</span> <span className="text-foreground">{'{'}</span></div>
                    <div>  <span className="text-purple-400">let</span> totalCredits <span className="text-foreground">=</span> <span className="text-amber-400">0</span><span className="text-foreground">;</span></div>
                    <div>  <span className="text-purple-400">let</span> totalPoints <span className="text-foreground">=</span> <span className="text-amber-400">0</span><span className="text-foreground">;</span></div>
                    <div>&nbsp;</div>
                    <div>  <span className="text-blue-400">subjects</span><span className="text-foreground">.</span><span className="text-blue-400">forEach</span><span className="text-foreground">((</span>subject<span className="text-foreground">) =&gt; {'{'}</span></div>
                    <div>    totalCredits <span className="text-foreground">+=</span> subject<span className="text-foreground">.</span>credits<span className="text-foreground">;</span></div>
                    <div>    totalPoints <span className="text-foreground">+=</span> subject<span className="text-foreground">.</span>credits <span className="text-foreground">*</span> getGradePoint<span className="text-foreground">(</span>subject<span className="text-foreground">.</span>grade<span className="text-foreground">);</span></div>
                    <div>  <span className="text-foreground">{'}'});</span></div>
                    <div>&nbsp;</div>
                    <div>  <span className="text-purple-400">return</span> totalCredits <span className="text-foreground">?</span> totalPoints <span className="text-foreground">/</span> totalCredits <span className="text-foreground">:</span> <span className="text-amber-400">0</span><span className="text-foreground">;</span></div>
                    <div><span className="text-foreground">{'}'};</span></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=400&q=80" 
                  alt="Project Screenshot" 
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
