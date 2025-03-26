
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
    { name: 'Blog', href: '/blog' },
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
          <Link to="/" className="flex items-center space-x-1">
            <img 
              src="/lovable-uploads/1f646fc7-0cab-4348-bd28-99c2a8d3bd5f.png" 
              alt="BizSimpl Logo" 
              className="h-12 w-auto object-contain" 
            />
            <span className="text-xl font-bold text-purple-700 font-poppins tracking-tight">
              BizSimpl<span className="ml-0.5">Startup</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center justify-center flex-grow mx-auto">
            <div className="flex items-center space-x-1">
              <div className="relative px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium text-purple-700 hover:text-purple-800 transition-colors rounded-md focus:outline-none">
                    Company Registration
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72 bg-white">
                    <Link to="/private-limited">
                      <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                        <Building className="h-5 w-5 text-purple-700" />
                        <div>
                          <div className="font-medium">Private Limited Company</div>
                          <div className="text-xs text-gray-500">Register your business as a private limited company</div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/llp">
                      <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                        <Briefcase className="h-5 w-5 text-purple-700" />
                        <div>
                          <div className="font-medium">Limited Liability Partnership</div>
                          <div className="text-xs text-gray-500">Form a partnership with limited liability</div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/one-person-company">
                      <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                        <UserRound className="h-5 w-5 text-purple-700" />
                        <div>
                          <div className="font-medium">One Person Company</div>
                          <div className="text-xs text-gray-500">Start a company with a single director</div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-purple-700 hover:text-purple-800 transition-colors rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <Link to="/registration">
              <CustomButton size="md" className="whitespace-nowrap bg-purple-700 text-white hover:bg-purple-800">
                Register your Business
              </CustomButton>
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          <div className="block">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-purple-700 hover:text-purple-800 hover:bg-gray-50 rounded-md">
                Company Registration
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 mt-1">
                <Link
                  to="/private-limited"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Building className="h-4 w-4" />
                  <span>Private Limited Company</span>
                </Link>
                <Link
                  to="/llp"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Limited Liability Partnership</span>
                </Link>
                <Link
                  to="/one-person-company"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserRound className="h-4 w-4" />
                  <span>One Person Company</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block px-3 py-2 text-base font-medium text-purple-700 hover:text-purple-800 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-2">
            <Link
              to="/registration"
              className="block w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <CustomButton className="w-full bg-purple-700 text-white hover:bg-purple-800">
                Register your Business
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
