import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import ScrollAnimation from './ScrollAnimation';
import toWatchPic from '../assets/to-watch-picture.png';
import lunaHotelPic from '../assets/luna-hotel-picture.png';
import mhGamePic from '../assets/mh-game-picture.png';
import insurancePic from '../assets/insurance-picture.png';

const projectsData = [
  {
    id: 1,
    title: 'ToWatch: Watchlist Web App',
    image: toWatchPic,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
    liveLink: 'https://to-watch.netlify.app',
    repoLink: 'https://github.com/jadejerr/to-watch',
    downloadLink: null,
  },
  {
    id: 2,
    title: 'Luna Hotel Website',
    image: lunaHotelPic,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveLink: 'https://jadejerr.github.io/luna-hotel-website/',
    repoLink: 'https://github.com/jadejerr/luna-hotel-website',
    downloadLink: null,
  },
  {
    id: 3,
    title: 'Mental Health Awareness Gamified App',
    image: mhGamePic,
    tags: ['Java'],
    liveLink: null,
    repoLink: 'https://github.com/jadejerr/mental-health-awareness',
    downloadLink: 'https://drive.google.com/file/d/1qN3xvb0WD4kB3FNm_Qa9ueiQVlbd-fl_/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Insurance4You: Insurance Management System',
    image: insurancePic,
    tags: ['Python', 'SQLite'],
    liveLink: null,
    repoLink: 'https://github.com/jadejerr/insurance4you',
    downloadLink: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary-dark py-20">
      <ScrollAnimation animation="animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent-blue uppercase tracking-wider">
              MY WORK
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-light-text mt-2">
              Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { title, image, tags, liveLink, repoLink, downloadLink } = project;

  return (
    <div className="bg-primary-dark rounded-xl overflow-hidden shadow-2xl shadow-black/30 
                    transform transition-all duration-500 hover:scale-105 hover:shadow-accent-blue/20">
      
      {/* Image */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-light-text mb-3">{title}</h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-secondary-dark text-accent-blue text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* --- Links Section --- */}
        <div className="flex justify-between items-center">
          <span className="text-secondary-text text-sm font-medium">View Links:</span>
          <div className="flex space-x-5">
            
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-accent-blue"
              >
                <FaExternalLinkAlt 
                  size={22} 
                  className="transition-transform duration-300 ease-in-out 
                             hover:scale-125 hover:-rotate-12"
                />
              </a>
            )}
            
            {downloadLink && (
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-accent-blue"
              >
                <FaDownload 
                  size={22} 
                  className="cursor-pointer transition-transform duration-300 ease-in-out 
                             hover:scale-125 hover:-rotate-12" 
                />
              </a>
            )}
            
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-accent-blue"
              >
                <FaGithub 
                  size={24} 
                  className="transition-transform duration-300 ease-in-out 
                             hover:scale-125 hover:-rotate-12"
                />
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;