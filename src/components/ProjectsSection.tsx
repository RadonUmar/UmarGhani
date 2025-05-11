import { LayoutGrid } from 'lucide-react';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection = ({ isDarkMode }: ProjectsSectionProps) => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of this project and what technologies were used.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      imageUrl: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of this project and what technologies were used.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of this project and what technologies were used.',
      tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div>
      <h2 className="section-heading flex items-center gap-2 text-3xl mb-8">
        <LayoutGrid className="text-teal-400" size={28} />
        Projects
      </h2>
      
      <p className="max-w-2xl mb-12 text-lg reveal">
        Showcase of my work and creations. Here are some of the projects I've worked on.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`card reveal ${
              isDarkMode ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-white hover:shadow-xl'
            } transform transition-all duration-300 hover:-translate-y-2`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`text-xs px-3 py-1 rounded-full ${
                      isDarkMode 
                        ? 'bg-slate-700 text-teal-400' 
                        : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;