import { Github as GitHub, Linkedin, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = heroRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center text-center pt-20 relative"
    >
      <div className="max-w-3xl mx-auto">
        <h4 className="text-teal-400 font-medium mb-2 reveal text-2xl md:text-4xl lg:text-5xl xl:text-6xl">Hello there, I'm</h4>
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 tracking-tight reveal" style={{ transitionDelay: '100ms' }}>
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Umar Ghani
          </span>
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 reveal" style={{ transitionDelay: '200ms' }}>
          Student @ UC Berkeley
        </h2>
        <p className="text-lg md:text-2xl lg:text-4xl xl:text-5xl mb-10 max-w-2xl mx-auto reveal opacity-80" style={{ transitionDelay: '300ms' }}>
          I like to build.
        </p>

        <div className="flex justify-center space-x-6 mb-12 reveal" style={{ transitionDelay: '400ms' }}>
          <a 
            href="https://github.com/RadonUmar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <GitHub size={24} className="text-teal-400" />
          </a>
          <a 
            href="https://www.linkedin.com/in/umarghani1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-teal-400" />
          </a>
        </div>

        <div className="reveal" style={{ transitionDelay: '500ms' }}>
          <a 
            href="#projects" 
            className={`button-secondary group ${isDarkMode ? 'border-teal-400 text-teal-400' : 'border-teal-500 text-teal-500'}`}
          >
            See my work
            <ChevronDown size={16} className="ml-2 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-teal-400" />
      </div>
    </section>
  );
};

export default Hero;