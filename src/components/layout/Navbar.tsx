import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../ui/CustomButton';
import { Menu, X, ChevronDown, Building, Briefcase, UserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Pricing', href: '/pricing' }
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
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/e73da025-cc9d-4518-abc3-8a07994b3db4.png" 
                alt="BizSimpl Logo" 
                className="h-10 w-auto"
              />
              <span className="sr-only">BizSimpl</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-grow mx-auto">
            <div className="flex items-center space-x-1">
              {/* Company Registration Dropdown */}
              <div className="relative px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-700 hover:text-theme-purple transition-colors rounded-md focus:outline-none">
                    Company Registration
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72 bg-white">
                    <Link to="/private-limited">
                      <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                        <Building className="h-5 w-5 text-theme-purple" />
                        <div>
                          <div className="font-medium">Private Limited Company</div>
                          <div className="text-xs text-gray-500">Register your business as a private limited company</div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/llp">
                      <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                        <Briefcase className="h-5 w-5 text-theme-purple" />
                        <div>
                          <div className="font-medium">Limited Liability Partnership</div>
                          <div className="text-xs text-gray-500">Form a partnership with limited liability</div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/one-person-company">
                      <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                        <UserRound className="h-5 w-5 text-theme-purple" />
                        <div>
                          <div className="font-medium">One Person Company</div>
                          <div className="text-xs text-gray-500">Start a company with a single director</div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {/* Other Navigation Links */}
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-theme-purple transition-colors rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Placeholder div to balance the navbar */}
          <div className="hidden md:block w-[100px]"></div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 hover:text-theme-purple hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          {/* Company Registration Dropdown for Mobile */}
          <div className="block">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-theme-purple hover:bg-gray-50 rounded-md">
                Company Registration
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 mt-1">
                <Link
                  to="/private-limited"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-theme-purple hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Building className="h-4 w-4" />
                  <span>Private Limited Company</span>
                </Link>
                <Link
                  to="/llp"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-theme-purple hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Limited Liability Partnership</span>
                </Link>
                <Link
                  to="/one-person-company"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-theme-purple hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserRound className="h-4 w-4" />
                  <span>One Person Company</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          {/* Other Nav Links for Mobile */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-theme-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
