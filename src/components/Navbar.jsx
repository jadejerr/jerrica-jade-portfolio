import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navbarLogo from '../assets/logo-navbar.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'Projects', href: '#projects' },
    { id: 3, text: 'Tech Stack', href: '#stack' },
    { id: 4, text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-primary-dark fixed w-full top-0 left-0 z-50 shadow-lg shadow-black/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a href="#home" className="cursor-pointer">
            <img src={navbarLogo} alt="jadejerr logo" className="h-18 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-secondary-text hover:text-light-text duration-300 ease-in-out text-lg font-medium"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/12pW0oxrX2hF3zIv9ZtVCdpiepD3dmPST/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-blue text-primary-dark font-bold py-2 px-6 rounded-md hover:bg-opacity-90 duration-300 cursor-pointer"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={handleNav} className="block md:hidden text-light-text z-50 cursor-pointer">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? 'fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-800 bg-secondary-dark ease-in-out duration-500'
                : 'fixed left-full top-0 h-full w-[70%] ease-in-out duration-500'
            }
          >
            {/* Mobile Logo */}
            <a href="#home" className="text-3xl font-bold text-accent-blue p-6 block">
              JADE
            </a>

            {/* Mobile Nav Items */}
            <ul className="p-4">
              {navItems.map(item => (
                <li key={item.id} className="p-4 border-b border-gray-700">
                  <a
                    href={item.href}
                    onClick={handleNav}
                    className="text-light-text text-xl"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA Button */}
            <div className="p-6">
              <a
                href="https://drive.google.com/file/d/12pW0oxrX2hF3zIv9ZtVCdpiepD3dmPST/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-accent-blue text-primary-dark font-bold py-3 px-6 rounded-md hover:bg-opacity-90 duration-300 cursor-pointer"
              >
                Download CV
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;