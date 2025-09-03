import { Heart, Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-slate-900/80' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-teal-400 mb-3">Get in Touch</h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Want to work together or have a question?
              </p>
              <a 
                href="mailto:umarghani@berkeley.edu" 
                className="button-secondary inline-flex items-center"
              >
                <Mail size={18} className="mr-2" />
                Say Hello
              </a>
            </div>
            
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-teal-400 mb-2">UG</h2>
              <p className={`text-center ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Portfolio & Personal Site
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/RadonUmar" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${
                isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-200'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} className="text-teal-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/umarghani1" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${
                isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-200'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-teal-400" />
            </a>
          </div>
          
          <div className="text-center">
            <p className={`text-sm flex items-center justify-center ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              © {new Date().getFullYear()} Umar Ghani
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;