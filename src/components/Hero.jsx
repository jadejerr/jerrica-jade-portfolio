import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profilePic from '../assets/linkedin-profile-pic.JPG';

const Hero = () => {

  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen py-16 md:py-0 bg-primary-dark overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-secondary-text rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>


      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-secondary-text text-lg mb-2">Hello 👋 I'm JERRICA JADE, a dedicated</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-light-text mb-4 leading-tight min-h-36 md:min-h-0">
            {' '}
            <span className="text-accent-blue text-[55px]">
              {/* Typing Animation */}
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Software Engineer',
                  2000,
                  'Web Developer',
                  2000,
                  'Programmer',
                  2000,
                  () => {},
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </span>
          </h1>
          <p className="text-secondary-text max-w-md mx-auto md:mx-0 mb-8 text-lg">
            I find the fun in complex code. Love solving puzzles and building things that work. Take a look at my projects, and let's connect if you think I'd be a great fit for your team! 🤗
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <a
              href="https://drive.google.com/file/d/1WZ4UalDTAM4aeQu5yNdvHjn_t7F1onrC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-blue text-primary-dark font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="bg-secondary-dark text-accent-blue border border-accent-blue font-bold py-3 px-8 rounded-md hover:bg-accent-blue hover:text-primary-dark transition duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-6 text-secondary-text">
            <a href="https://github.com/jadejerr" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition duration-300">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/jerricajadepolorin" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition duration-300">
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center order-1 md:order-2 mt-10 md:mt-0">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-secondary-dark flex items-center justify-center p-2 shadow-xl shadow-black/20">
            <img
              src={profilePic}
              alt="Jerrica Jade Profile"
              className="rounded-full w-full h-full object-cover border-4 border-accent-blue/50"
            />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-blue/30 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary-text/30 rounded-full animate-pulse-slow animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;