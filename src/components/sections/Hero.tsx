
import React, { useEffect, useRef } from 'react';
import { CustomButton } from '../ui/CustomButton';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-radial from-bizsimpl-100/50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-radial from-bizsimpl-50/50 to-transparent opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block reveal reveal-up px-4 py-2 mb-6 rounded-full bg-bizsimpl-50 text-bizsimpl-700 text-sm font-medium">
            Simplified Business Registration & Compliance
          </span>
          
          <h1 className="reveal reveal-up text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance mb-6">
            Streamline your <span className="text-gradient">business journey</span> with seamless registration
          </h1>
          
          <p className="reveal reveal-up text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            One platform to register, manage and grow your business. Say goodbye to paperwork and hello to efficiency.
          </p>
          
          <div className="reveal reveal-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <CustomButton size="lg" className="w-full sm:w-auto">
              Get Started <ArrowRight size={16} className="ml-2" />
            </CustomButton>
            <CustomButton variant="outline" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </CustomButton>
          </div>
          
          <div className="reveal reveal-up">
            <p className="text-sm text-gray-500 mb-3">Trusted by innovative businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="h-7 w-24 bg-gray-200/50 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
