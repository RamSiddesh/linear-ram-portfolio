
import React from 'react';
import { Award, Calendar, Trophy, Code, BookOpen } from 'lucide-react';

interface AchievementProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Achievement: React.FC<AchievementProps> = ({ year, title, description, icon }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
          {icon}
        </div>
        <div className="w-px h-full bg-border mt-4"></div>
      </div>
      
      <div className="pb-12">
        <span className="inline-block py-1 px-2.5 bg-secondary rounded-full text-xs font-medium mb-2">
          {year}
        </span>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const AchievementsSection: React.FC = () => {
  // Sorting achievements from most recent to oldest
  const achievements = [
    {
      year: '2025',
      title: 'Luminary Award',
      description: 'Recognized for outstanding contributions to computational solutions in academic projects.',
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: '2025',
      title: '1st Prize in Code Auction',
      description: 'Won first place in the university-wide coding competition, demonstrating exceptional problem-solving skills.',
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      year: '2025',
      title: 'Managed and Conducted Coding Event',
      description: 'Organized and led a successful coding event with over 100 participants, showcasing leadership and management skills.',
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: '2024',
      title: '1st Prize in Coding Battles',
      description: 'Secured top position in the departmental coding competition through algorithmic excellence and efficient solutions.',
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      year: '2024',
      title: 'Hackathon Participation (Techno-Summit)',
      description: 'Developed an innovative solution for real-world problems at the annual Techno-Summit hackathon.',
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: '2022',
      title: 'Basketball District Championship Runner-up',
      description: 'Led team to second place in the district championship, demonstrating teamwork and leadership skills.',
      icon: <Award className="w-5 h-5" />,
    },
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Sort by year in descending order
  
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Achievements</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Significant milestones that highlight my growth and accomplishments
        </p>
        
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <Achievement key={index} {...achievement} />
          ))}
          
          <div className="flex">
            <div className="flex items-center mr-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
            
            <div>
              <span className="inline-block py-1 px-2.5 bg-secondary rounded-full text-xs font-medium">
                Journey Continues
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
