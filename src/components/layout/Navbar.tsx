
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../ui/CustomButton';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Company Registration', href: '#registration' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-bizsimpl-950">Biz<span className="text-bizsimpl-600">simpl</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-bizsimpl-600 transition-colors rounded-md"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <CustomButton variant="outline" size="sm">Log in</CustomButton>
            <CustomButton size="sm">Get Started</CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 hover:text-bizsimpl-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-bizsimpl-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3">
            <CustomButton variant="outline" size="sm" className="justify-center">
              Log in
            </CustomButton>
            <CustomButton size="sm" className="justify-center">
              Get Started
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
