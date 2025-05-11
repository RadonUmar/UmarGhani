import { FileText } from 'lucide-react';

interface WritingSectionProps {
  isDarkMode: boolean;
}

const WritingSection = ({ isDarkMode }: WritingSectionProps) => {
  const articles = [
    {
      id: 1,
      title: 'The Future of Web Development',
      date: 'May 15, 2023',
      excerpt: 'An exploration of emerging trends and technologies in web development.',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      date: 'April 3, 2023',
      excerpt: 'An introduction to machine learning concepts for beginners.',
      readTime: '8 min read',
      category: 'AI'
    },
    {
      id: 3,
      title: 'The Impact of Open Source',
      date: 'March 21, 2023',
      excerpt: 'How open source contributions have shaped the modern tech landscape.',
      readTime: '6 min read',
      category: 'Open Source'
    }
  ];

  return (
    <div>
      <h2 className="section-heading flex items-center gap-2 text-3xl mb-8">
        <FileText className="text-teal-400" size={28} />
        Writing
      </h2>
      
      <p className="max-w-2xl mb-12 text-lg reveal">
        Essays, articles, and thoughts. Here are some pieces I've written on topics I care about.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <a 
            key={article.id}
            href="#" 
            className={`card reveal block p-6 ${
              isDarkMode 
                ? 'bg-slate-800/50 hover:bg-slate-800' 
                : 'bg-white hover:shadow-xl'
            } transform transition-all duration-300 hover:-translate-y-2`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-3">
              <span className={`text-xs px-3 py-1 rounded-full ${
                isDarkMode 
                  ? 'bg-teal-400/20 text-teal-400' 
                  : 'bg-teal-100 text-teal-800'
              }`}>
                {article.category}
              </span>
              <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {article.date}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 hover:text-teal-400 transition-colors">
              {article.title}
            </h3>
            
            <p className={`mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {article.excerpt}
            </p>
            
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {article.readTime}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WritingSection;