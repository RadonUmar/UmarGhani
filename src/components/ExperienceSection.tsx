import { Tv } from 'lucide-react';

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

const ExperienceSection = ({ isDarkMode }: ExperienceSectionProps) => {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer Intern',
      company: 'HyperPlanar',
      period: 'June 2024 - Sep. 2024',
      description: 'Integrated LLM APIs into trading workflows, enabling natural language-driven analysis. Researched techniques for fine-tuning and optimizing LLms for financial trading applications. Designed architecture diagrams to streamline communication and technical planning.',
      skills: ['Python', 'LLM APIs', 'Financial Trading', 'Architecture Diagrams', 'Research']
    },
    {
      id: 2,
      role: 'Student Researcher',
      company: 'USC Biomechanics Lab',
      period: 'Summer 2023 & Summer 2024',
      description: 'Built software tools to analyze biomechanical data from a force-measuring device and visualize results as vectors. Developed Python programs to preprocess and synchronize video with force data for motion analysis. Utilized OpenCV, NumPy, Pandas, and Matplotlib to process data, edit video, and display quantitative results.',
      skills: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib']
    },
  ];

  return (
    <div>
      <h2 className="section-heading flex items-center gap-2 text-3xl mb-8">
        <Tv className="text-teal-400" size={28} />
        Experience
      </h2>
      
      <p className="max-w-2xl mb-12 text-lg reveal">
        My professional and academic journey. Here's where I've worked and what I've learned along the way.
      </p>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`card reveal p-6 border-l-4 border-teal-400 ${
              isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-md'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="lg:flex lg:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-teal-400 font-medium">{exp.company}</p>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} lg:text-right`}>
                {exp.period}
              </p>
            </div>
            <p className={`my-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.skills.map((skill) => (
                <span 
                  key={skill} 
                  className={`text-xs px-3 py-1 rounded-full ${
                    isDarkMode 
                      ? 'bg-slate-700 text-teal-400' 
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;