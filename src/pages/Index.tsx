
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Ram Siddesh M | Portfolio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Computer Science Engineering student specializing in Python, Full-Stack Development, and Data Analysis.');
    }
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
