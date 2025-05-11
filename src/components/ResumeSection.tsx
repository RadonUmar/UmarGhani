import { FileBadge, Download } from 'lucide-react';

interface ResumeSectionProps {
  isDarkMode: boolean;
}

const ResumeSection = ({ isDarkMode }: ResumeSectionProps) => {
  const skills = [
    { category: 'Lorem', items: ['Lorem ipsum', 'Dolor sit', 'Amet consectetur', 'Adipiscing elit', 'Sed do'] },
    { category: 'Ipsum', items: ['Tempor', 'Incididunt', 'Ut labore', 'Et dolore', 'Magna aliqua'] },
    { category: 'Dolor', items: ['Ut enim', 'Ad minim', 'Veniam quis', 'Nostrud', 'Exercitation'] },
    { category: 'Sit', items: ['Ullamco', 'Laboris nisi', 'Ut aliquip', 'Ex ea', 'Commodo consequat'] }
  ];

  const education = [
    {
      id: 1,
      degree: 'B.S. Data Science',
      school: 'University of California, Berkeley',
      period: '2025 - 2029',
      gpa: ''
    }
  ];

  return (
    <div>
      <h2 className="section-heading flex items-center gap-2 text-3xl mb-8">
        <FileBadge className="text-teal-400" size={28} />
        Resume
      </h2>
      
      <div className="flex justify-between items-center mb-12">
        <p className="max-w-2xl text-lg reveal">
          A summary of my qualifications, skills, and educational background.
        </p>
        
        <a 
          href="#" 
          className={`button-primary flex items-center gap-2 reveal ${
            isDarkMode ? 'bg-teal-400 hover:bg-teal-500' : 'bg-teal-500 hover:bg-teal-600'
          }`}
          download
        >
          <Download size={18} />
          Download CV
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className={`card p-6 lg:col-span-1 reveal ${isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-md'}`}>
          <h3 className="text-xl font-semibold mb-6">Skills</h3>
          
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="text-teal-400 font-medium mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className={`text-sm px-3 py-1 rounded-full ${
                        isDarkMode 
                          ? 'bg-slate-700 text-slate-200' 
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
        
        <div className={`card p-6 lg:col-span-2 reveal ${isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-md'}`}>
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-teal-400">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <h4 className="font-semibold text-lg mb-4">Relevant Coursework</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Lorem ipsum dolor',
                  'Sit amet consectetur',
                  'Adipiscing elit',
                  'Sed do eiusmod',
                  'Tempor incididunt',
                  'Ut labore et',
                  'Dolore magna',
                  'Aliqua ut enim'
                ].map((course) => (
                  <div 
                    key={course}
                    className={`p-3 rounded ${
                      isDarkMode 
                        ? 'bg-slate-700/50' 
                        : 'bg-slate-100'
                    }`}
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;