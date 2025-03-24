
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../ui/CustomButton';
import { ArrowRight } from 'lucide-react';

const companyLogos = [
  { name: 'Facebook', logo: '/logos/facebook.svg' },
  { name: 'Netflix', logo: '/logos/netflix.svg' },
  { name: 'Uber', logo: '/logos/uber.svg' },
  { name: 'Airbnb', logo: '/logos/airbnb.svg' },
  { name: 'Slack', logo: '/logos/slack.svg' },
  { name: 'Dropbox', logo: '/logos/dropbox.svg' }
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const handleGetStarted = () => {
    navigate('/pricing');
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-radial from-bizsimpl-100/50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-radial from-bizsimpl-50/50 to-transparent opacity-60"></div>
      </div>
      
      {/* Main content section */}
      <div className="container mx-auto px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block reveal px-4 py-2 mb-6 rounded-full bg-bizsimpl-50 text-bizsimpl-700 text-sm font-medium">
            Simplified Business Registration & Compliance
          </span>
          
          <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance mb-6">
            Your Business <span className="text-gradient">Launchpad</span>
          </h1>
          
          <p className="reveal text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            One platform to register, manage and grow your business. Say goodbye to paperwork and hello to efficiency.
          </p>
          
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <CustomButton size="lg" className="w-full sm:w-auto" onClick={handleGetStarted}>
              Get Started <ArrowRight size={16} className="ml-2" />
            </CustomButton>
          </div>
        </div>
      </div>
      
      {/* Wider company logo carousel with movement */}
      <div className="reveal w-full mt-auto">
        <p className="text-sm text-gray-500 mb-3 text-center">Trusted by innovative businesses</p>
        <div className="w-full max-w-6xl mx-auto overflow-hidden py-4">
          <div className="logo-scroll">
            {[...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (
              <div key={index} className="logo-item mx-6">
                <div className="h-5 px-3 bg-gray-200/70 rounded-md flex items-center justify-center text-xs text-gray-500 font-medium">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
