import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-gray-800 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-secondary-text">
              &copy; {currentYear} Jerrica Jade. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 text-secondary-text">
            <a href="https://github.com/jadejerr" target="_blank" rel="noopener noreferrer" 
               className="hover:text-accent-blue transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/jerricajadepolorin" target="_blank" rel="noopener noreferrer" 
               className="hover:text-accent-blue transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;