
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../ui/CustomButton';
import { ArrowRight } from 'lucide-react';

const companyLogos = [{
  name: 'Aad Square Tech Solutions',
  logo: '/lovable-uploads/77204ec6-0e35-4495-8f8d-f3fbea08e9d7.png'
}, {
  name: 'Overhunk\'d Media House',
  logo: '/lovable-uploads/a8cdd939-0e20-4d0a-9d40-35dae16a7975.png'
}, {
  name: 'High Function',
  logo: '/lovable-uploads/81c8571f-eb4a-46ab-b543-a3d08be69a03.png'
}, {
  name: 'Chanaya India Private Limited',
  logo: '/lovable-uploads/d1b00ede-965e-4fcf-b016-413cd0a0226e.png'
}, {
  name: 'Nolojik',
  logo: '/lovable-uploads/54d60a92-cbc1-4b11-8e7c-e6b030269da3.png'
}, {
  name: 'Capup',
  logo: '/lovable-uploads/bfce4be7-7326-43ae-a755-ea71ef79c722.png'
}, {
  name: 'Brighton Decor',
  logo: '/lovable-uploads/c15cfb9d-cb75-4ae2-8f1e-47b1eee69675.png'
}, {
  name: 'Jobshine Solutions',
  logo: '/lovable-uploads/d530b83d-ff18-460a-99b6-2efd2e93c91d.png'
}];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    
    return () => elements?.forEach(el => observer.unobserve(el));
  }, []);
  
  const handleGetStarted = () => {
    navigate('/pricing');
  };
  
  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col justify-between pt-24 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-radial from-purple-100/50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-radial from-purple-50/50 to-transparent opacity-60"></div>
      </div>
      
      {/* Main content section */}
      <div className="container mx-auto px-6 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block reveal px-4 py-2 mb-6 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
            Simplified Business Registration & Compliance
          </span>
          
          <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance mb-6">
            Your Business <span className="text-gray-900">Launchpad</span>
          </h1>
          
          <p className="reveal md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-base">
            One platform to register, manage and grow your business. Say goodbye to paperwork and hello to efficiency.
          </p>
          
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <CustomButton 
              size="lg" 
              className="w-full sm:w-auto bg-purple-700 text-white hover:bg-purple-800" 
              onClick={handleGetStarted}
            >
              Get Started <ArrowRight size={16} className="ml-2" />
            </CustomButton>
          </div>
        </div>
      </div>
      
      {/* Company logo carousel with actual company logos */}
      <div className="reveal w-full mt-auto">
        <p className="font-bold text-gray-900 mb-1 text-center text-3xl py-[15px]">Trusted by innovative businesses</p>
        <div className="w-full max-w-6xl mx-auto overflow-hidden py-2">
          <div className="logo-scroll py-[20px]">
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <div key={index} className="logo-item mx-6">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
