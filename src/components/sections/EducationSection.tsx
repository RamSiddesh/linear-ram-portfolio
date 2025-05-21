
import React from 'react';
import { Calendar, BookOpen, Award } from 'lucide-react';

const EducationSection: React.FC = () => {
  const educationData = [
    {
      period: '2024-2028',
      degree: 'B.Tech Computer Science Engineering',
      institution: 'Sathyabama Institute of Science and Technology',
      score: 'CGPA: 9.0',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      period: '2023-2024',
      degree: 'Class 12 (HSC)',
      institution: 'Srimathi Sundaravalli Memorial School',
      score: '83.4%',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      period: '2021-2022',
      degree: 'Class 10 (SSLC)',
      institution: 'Srimathi Sundaravalli Memorial School',
      score: '90.6%',
      icon: <BookOpen className="w-5 h-5" />
    }
  ];
  
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My academic journey and qualifications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                {item.icon}
              </div>
              
              <div className="flex items-center mb-3">
                <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
              
              <h3 className="text-lg font-medium mb-2">{item.degree}</h3>
              <p className="text-muted-foreground mb-3">{item.institution}</p>
              
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-accent" />
                <span>{item.score}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-md mx-auto border border-gradient-secondary rounded-lg p-6 bg-card">
          <a 
            href="https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS60S14330042301352804" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-secondary/10 flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-gradient-secondary" />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Certification</h3>
              <p className="text-muted-foreground">Python for Data Science (NPTEL)</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
