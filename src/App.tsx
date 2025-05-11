import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import WritingSection from './components/WritingSection';
import ResumeSection from './components/ResumeSection';
import Footer from './components/Footer';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
      
      <Header activeSection={activeSection} isDarkMode={isDarkMode} />
      
      <button 
        onClick={toggleTheme} 
        className={`fixed bottom-6 right-6 p-3 rounded-full z-50 transition-all duration-300 shadow-lg ${
          isDarkMode ? 'bg-slate-800 text-yellow-300 hover:bg-slate-700' : 'bg-white text-slate-800 hover:bg-slate-100'
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Hero isDarkMode={isDarkMode} />
        
        <div className="space-y-28 mt-28">
          <Section id="projects">
            <ProjectsSection isDarkMode={isDarkMode} />
          </Section>
          
          <Section id="experience">
            <ExperienceSection isDarkMode={isDarkMode} />
          </Section>
          
          <Section id="writing">
            <WritingSection isDarkMode={isDarkMode} />
          </Section>
          
          <Section id="resume">
            <ResumeSection isDarkMode={isDarkMode} />
          </Section>
        </div>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;