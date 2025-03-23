
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../ui/CustomButton';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const companyLogos = [
  { name: 'Google', logo: '/logos/google.svg' },
  { name: 'Microsoft', logo: '/logos/microsoft.svg' },
  { name: 'Amazon', logo: '/logos/amazon.svg' },
  { name: 'Apple', logo: '/logos/apple.svg' },
  { name: 'Facebook', logo: '/logos/facebook.svg' },
  { name: 'Netflix', logo: '/logos/netflix.svg' },
  { name: 'Uber', logo: '/logos/uber.svg' },
  { name: 'Airbnb', logo: '/logos/airbnb.svg' },
  { name: 'Slack', logo: '/logos/slack.svg' },
  { name: 'Dropbox', logo: '/logos/dropbox.svg' },
  { name: 'Twitter', logo: '/logos/twitter.svg' },
  { name: 'LinkedIn', logo: '/logos/linkedin.svg' },
  { name: 'Spotify', logo: '/logos/spotify.svg' },
  { name: 'Adobe', logo: '/logos/adobe.svg' },
  { name: 'Salesforce', logo: '/logos/salesforce.svg' }
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
            <CustomButton size="lg" className="w-full sm:w-auto" onClick={handleGetStarted}>
              Get Started <ArrowRight size={16} className="ml-2" />
            </CustomButton>
          </div>
        </div>
      </div>
      
      {/* Full-width company logo carousel */}
      <div className="reveal reveal-up w-full">
        <p className="text-sm text-gray-500 mb-3 text-center">Trusted by innovative businesses</p>
        <div className="w-full overflow-hidden">
          <Carousel 
            opts={{ 
              align: "start", 
              loop: true,
              dragFree: true
            }}
            className="w-full"
          >
            <CarouselContent className="py-4 logo-scroll">
              {companyLogos.map((company, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 logo-item">
                  <div className="flex items-center justify-center h-10 mx-auto">
                    <div className="h-6 w-24 bg-gray-200/70 rounded flex items-center justify-center text-xs text-gray-500 font-medium">
                      {company.name}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
