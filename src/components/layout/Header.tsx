import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';
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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Verticals', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-20 shrink-0">
          {/* <Logo isScrolled={true} /> */}
          <img
            src={logo}
            alt=""
            className="w-[130px] h-[49px] xs:w-[150px] xs:h-[56px] sm:w-[180px] sm:h-[68px] md:w-[200px] md:h-[75px] object-contain cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg hover:shadow-primary"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                font-montserrat font-medium text-base whitespace-nowrap
                transition-colors duration-300
                relative group
                ${isActive ? 'text-primary' : 'text-black hover:text-primary'}
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`block h-[2px] bg-primary transition-transform origin-left duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary whitespace-nowrap">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden z-[60] relative p-2 -mr-2 touch-manipulation rounded-md transition-colors duration-300 ${
            isMobileMenuOpen ? 'bg-white' : ''
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 text-secondary" />
          ) : (
            <Menu className="w-7 h-7 text-black" />
          )}
        </button>

        {/* Mobile Navigation — full-screen dark overlay, distinct from desktop nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex flex-col bg-secondary lg:hidden"
              initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
              animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
              exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            >
              <nav className="flex-1 flex flex-col justify-center gap-1 px-8 pt-24">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `
                      group flex items-baseline gap-3 py-3 border-b border-white/10
                      ${isActive ? 'text-primary-light' : 'text-white'}
                    `}
                  >
                    {({ isActive }) => (
                      <motion.span
                        className="flex items-baseline gap-3 w-full"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.15 + index * 0.06 }}
                      >
                        <span className="font-montserrat text-sm text-primary-light/70">
                          0{index + 1}
                        </span>
                        <span
                          className={`font-montserrat font-bold text-3xl xs:text-4xl tracking-tight transition-colors duration-300 ${
                            isActive ? 'text-primary-light' : 'group-active:text-primary-light'
                          }`}
                        >
                          {link.name}
                        </span>
                      </motion.span>
                    )}
                  </NavLink>
                ))}
              </nav>

              <motion.div
                className="px-8 pb-10 pt-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-between w-full bg-primary hover:bg-primary-dark text-white font-montserrat font-semibold text-lg rounded-md py-4 px-6 transition-colors duration-300 mb-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Quote
                  <ArrowUpRight className="w-5 h-5" />
                </Link>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-white/70 hover:text-primary-light transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-lora text-sm">+1 (234) 567-890</span>
                  </a>
                  <a
                    href="mailto:info@vipasenergy.com"
                    className="flex items-center gap-3 text-white/70 hover:text-primary-light transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="font-lora text-sm">info@vipasenergy.com</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
