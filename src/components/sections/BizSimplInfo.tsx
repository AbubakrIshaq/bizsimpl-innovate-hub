
import React, { useEffect, useRef } from 'react';
import { CustomCard } from '../ui/CustomCard';

const BizSimplInfo = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = infoRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section ref={infoRef} className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - What is BizSimpl Startup */}
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
              What is BizSimpl <span className="ml-1">Startup</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              BizSimpl Startup is a platform dedicated to empowering entrepreneurs in launching their businesses. We offer free consultations to help founders choose the right business structure, as well as assist in their formation and registration, ensuring a smooth and hassle-free process.
            </p>
          </div>
          
          {/* Right column - Stats Cards */}
          <div className="grid grid-cols-2 gap-4 lg:mt-0">
            <div className="reveal" style={{ transitionDelay: '0ms' }}>
              <CustomCard className="h-full">
                <div className="flex flex-col items-center text-center p-4">
                  <h3 className="text-3xl font-bold text-secondary mb-2">400+</h3>
                  <p className="text-gray-600 text-sm">Businesses trust us</p>
                </div>
              </CustomCard>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <CustomCard className="h-full">
                <div className="flex flex-col items-center text-center p-4">
                  <h3 className="text-3xl font-bold text-secondary mb-2">500+</h3>
                  <p className="text-gray-600 text-sm">Businesses Incorporated</p>
                </div>
              </CustomCard>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <CustomCard className="h-full">
                <div className="flex flex-col items-center text-center p-4">
                  <h3 className="text-3xl font-bold text-secondary mb-2">95%</h3>
                  <p className="text-gray-600 text-sm">Success Rate</p>
                </div>
              </CustomCard>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '300ms' }}>
              <CustomCard className="h-full">
                <div className="flex flex-col items-center text-center p-4">
                  <h3 className="text-3xl font-bold text-secondary mb-2">10+</h3>
                  <p className="text-gray-600 text-sm">Years Of Experience</p>
                </div>
              </CustomCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizSimplInfo;
