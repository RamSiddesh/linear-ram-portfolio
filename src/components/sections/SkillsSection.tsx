import React from 'react';
import { 
  Code, Database, BookOpen, FileText, 
  BarChart, Github, FileJson
} from 'lucide-react';

interface SkillCardProps {
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: React.ReactNode;
  description: string;
  gradient: 'primary' | 'secondary' | 'tertiary';
}

const SkillCard: React.FC<SkillCardProps> = ({ title, level, icon, description, gradient }) => {
  const getLevelWidth = () => {
    switch (level) {
      case 'Beginner': return 'w-1/3';
      case 'Intermediate': return 'w-2/3';
      case 'Advanced': return 'w-full';
    }
  };
  
  return (
    <div className="bg-card border border-border rounded-lg p-6 skill-card">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-${gradient}/10`}>
        <div className={`text-gradient-${gradient}`}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      
      <div className="mt-4 mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span>{level}</span>
          <span className="text-muted-foreground">
            {level === 'Beginner' ? '33%' : level === 'Intermediate' ? '66%' : '100%'}
          </span>
        </div>
        <div className="w-full bg-secondary h-1.5 rounded-full">
          <div className={`bg-gradient-${gradient} h-1.5 rounded-full ${getLevelWidth()}`}></div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mt-3">{description}</p>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skills = [
    {
      title: 'Python/C Program',
      level: 'Advanced' as const,
      icon: <Code className="w-5 h-5" />,
      description: 'Extensive experience in algorithm development, data structures, and application programming',
      gradient: 'primary' as const
    },
    {
      title: 'AI Tools',
      level: 'Intermediate' as const,
      icon: <Code className="w-5 h-5" />,
      description: 'Experience with machine learning libraries and AI frameworks for data analysis',
      gradient: 'secondary' as const
    },
    {
      title: 'SQL',
      level: 'Intermediate' as const,
      icon: <Database className="w-5 h-5" />,
      description: 'Database design, query optimization, and data manipulation',
      gradient: 'tertiary' as const
    },
    {
      title: 'HTML/CSS',
      level: 'Intermediate' as const,
      icon: <FileText className="w-5 h-5" />,
      description: 'Creating responsive and visually appealing web interfaces',
      gradient: 'primary' as const
    },
    {
      title: 'Data Manipulation',
      level: 'Intermediate' as const,
      icon: <FileJson className="w-5 h-5" />,
      description: 'Using Python libraries like Pandas and NumPy for efficient data processing',
      gradient: 'secondary' as const
    },
    {
      title: 'Data Visualization',
      level: 'Intermediate' as const,
      icon: <BarChart className="w-5 h-5" />,
      description: 'Creating insightful visualizations with Matplotlib, Seaborn and other Python tools',
      gradient: 'tertiary' as const
    },
  ];
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Technical Skills</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My continuously evolving toolkit of technologies and skills that I bring to every project
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
