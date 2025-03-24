
import React, { useEffect, useRef } from 'react';
import { Building, Briefcase, UserRound } from 'lucide-react';
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
          {/* Left column - What is BizSimplStartup */}
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What is BizSimplStartup?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              BizSimplStartup is a platform dedicated to empowering entrepreneurs in launching their businesses. We offer free consultations to help founders choose the right business structure - Private Limited Company (Pvt Ltd), Limited Liability Partnership (LLP), or One Person Company (OPC) - as well as assist in their formation and registration, ensuring a smooth and hassle-free process.
            </p>
          </div>
          
          {/* Right column - Business Structure Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="reveal" style={{ transitionDelay: '0ms' }}>
              <CustomCard className="h-full">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="mb-4 p-4 bg-bizsimpl-50 rounded-full">
                    <Building className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Private Limited Company</h3>
                  <p className="text-gray-600 text-sm">Ideal for startups and businesses with growth potential who want to raise funds and offer ESOPs.</p>
                </div>
              </CustomCard>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <CustomCard className="h-full">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="mb-4 p-4 bg-bizsimpl-50 rounded-full">
                    <Briefcase className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Limited Liability Partnership</h3>
                  <p className="text-gray-600 text-sm">Perfect for professional services with fewer compliance requirements but limited liability protection.</p>
                </div>
              </CustomCard>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <CustomCard className="h-full">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="mb-4 p-4 bg-bizsimpl-50 rounded-full">
                    <UserRound className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">One Person Company</h3>
                  <p className="text-gray-600 text-sm">Suitable for solo entrepreneurs who want limited liability with single ownership.</p>
                </div>
              </CustomCard>
            </div>
          </div>
        </div>
        
        <div className="reveal flex justify-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary mb-2">1000+</h3>
              <p className="text-gray-600">Founders in the Community</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary mb-2">5000+</h3>
              <p className="text-gray-600">Company Registrations</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary mb-2">11</h3>
              <p className="text-gray-600">Startup Success Stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizSimplInfo;
