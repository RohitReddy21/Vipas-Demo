import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
// import Logo from '../ui/Logo';
import logo from '../home/assets/logo.png';
const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
            <img src={logo} alt="" className='w-[250px] h-[75px] object-contain cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg hover:shadow-primary rounded-md rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]' />

            </div>
            <p className="text-gray-300 mb-6">
              Vipas Energy is dedicated to providing sustainable energy solutions that power the future while preserving our planet.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#solar" className="text-gray-300 hover:text-primary transition-colors">Solar Energy Systems</Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-gray-300 hover:text-primary transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services#tech" className="text-gray-300 hover:text-primary transition-colors">SAP Integration</Link>
              </li>
              <li>
                <Link to="/services#engineering" className="text-gray-300 hover:text-primary transition-colors">Smart Infrastructure</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary hover:text-primary-light transition-colors font-medium">View All Services</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-primary transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-300">123 Energy Street, Cityville, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@vipasenergy.com" className="text-gray-300 hover:text-primary transition-colors">info@vipasenergy.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vipas Energy. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;