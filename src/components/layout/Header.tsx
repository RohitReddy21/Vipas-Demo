import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import Logo from '../ui/Logo';
import logo from '../home/assets/logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-20">
          {/* <Logo isScrolled={true} /> */}
          <img src={logo} alt="" className='w-[200px] h-[75px] object-contain cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg hover:shadow-primary ' />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                font-montserrat font-medium text-base text-black
                hover:text-primary transition-colors duration-300
                relative group
              `}
            >
              {link.name}
              <span className="block h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-secondary" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>

        {/* Mobile Navigation */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      className="fixed top-0 right-0 h-full w-[250px] bg-white z-40 flex flex-col items-center justify-center rounded-l-[20px] shadow-lg shadow-primary"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex flex-col gap-6">
        {/* Close Button */}
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="absolute top-4 right-4 text-secondary hover:text-primary transition duration-300"
        aria-label="Close menu"
      >
        <X className="w-6 h-6" />
      </button>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => `
              font-montserrat font-semibold text-lg text-secondary
              ${isActive ? 'text-primary' : 'hover:text-primary'}
              transition-colors duration-300
            `}
          >
            {link.name}
          </NavLink>
        ))}
        <Link 
          to="/contact" 
          className="btn-primary mt-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get a Quote
        </Link>
      </nav>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </header>
  );
};

export default Header;
