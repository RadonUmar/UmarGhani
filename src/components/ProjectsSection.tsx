import { LayoutGrid } from 'lucide-react';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection = ({ isDarkMode }: ProjectsSectionProps) => {
  const projects = [
    {
      id: 1,
      title: 'Kalshi Arbitrage Platform',
      description: 'I built backend systems for a Kalshi arbitrage platform, including a REST API, data pipelines, a Python client with a Java server for cross-platform requests, and integrations between Kalshi markets and ML analysis programs for real-time trading insights, while also contributing to an inventory manager for tracking financial holdings and portfolio data.',
      tags: ['Python', 'REST API', 'Data Pipelines', 'Java', 'Inventory Manager'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Kalshi_logo.jpg'
    },
    {
      id: 2,
      title: 'O Positive',
      description: 'Designed and developed a full-stack mobile app to connect blood donors with recipients, implementing CRUD features for users and profiles, and demoed it to judges, winning the Congressional App Challenge.',
      tags: ['PHP', 'Apache', 'MySQL'],
      imageUrl: 'data:image/jpeg;base64,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'
    },
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