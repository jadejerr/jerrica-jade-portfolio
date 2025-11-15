import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiSqlite,
  SiC,
  SiCplusplus,
  SiPhp,
  SiXampp,
  SiNetlify,
} from 'react-icons/si';
import { DiVisualstudio } from "react-icons/di";
import ScrollAnimation from './ScrollAnimation';

const techStackData = [
  { id: 1, name: 'React', icon: <FaReact size={40} /> },
  { id: 2, name: 'JavaScript', icon: <FaJsSquare size={40} /> },
  { id: 3, name: 'HTML5', icon: <FaHtml5 size={40} /> },
  { id: 4, name: 'CSS3', icon: <FaCss3Alt size={40} /> },
  { id: 5, name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { id: 6, name: 'Java', icon: <FaJava size={40} /> },
  { id: 7, name: 'Python', icon: <FaPython size={40} /> },
  { id: 8, name: 'C', icon: <SiC size={40} /> },
  { id: 9, name: 'C++', icon: <SiCplusplus size={40} /> },
  { id: 10, name: 'PHP', icon: <SiPhp size={40} /> },
  { id: 11, name: 'SQL', icon: <FaDatabase size={40} /> },
  { id: 12, name: 'MySQL', icon: <SiMysql size={40} /> },
  { id: 13, name: 'SQLite', icon: <SiSqlite size={40} /> },
  { id: 14, name: 'GitHub', icon: <FaGithub size={40} /> },
  { id: 15, name: 'Git', icon: <FaGitAlt size={40} /> },
  { id: 16, name: 'VS Code', icon: <DiVisualstudio size={40} /> },
  { id: 17, name: 'Vite', icon: <SiVite size={40} /> },
  { id: 18, name: 'XAMPP', icon: <SiXampp size={40} /> },
  { id: 19, name: 'Netlify', icon: <SiNetlify size={40} /> },
  { id: 20, name: 'Figma', icon: <FaFigma size={40} /> },
];

const TechStacks = () => {
  return (
    <section id="stack" className="bg-primary-dark py-20">
      <ScrollAnimation animation="animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent-blue uppercase tracking-wider">
              MY SKILLS
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-light-text mt-2">
              Tech Stack
            </h2>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {techStackData.map((tech) => (
              <div
                key={tech.id}
                className="group bg-secondary-dark p-4 rounded-xl flex flex-col items-center justify-center
                           text-center text-secondary-text
                           transition-all duration-300 ease-in-out
                           hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-blue/20"
              >
                {/* Icon */}
                <div className="mb-2 transition-colors duration-300 group-hover:text-accent-blue">
                  {tech.icon}
                </div>
                
                {/* Name */}
                <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-light-text">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default TechStacks;