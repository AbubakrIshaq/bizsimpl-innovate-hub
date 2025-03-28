import React, { useEffect, useRef } from 'react';
import { CustomCard } from '../ui/CustomCard';
const BizSimplInfo = () => {
  const infoRef = useRef<HTMLDivElement>(null);
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
    const elements = infoRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => elements?.forEach(el => observer.unobserve(el));
  }, []);
  return <section ref={infoRef} id="about" className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - What is BizSimpl Startup */}
          <div className="reveal">
            <h2 className="text-3xl font-bold text-purple-700 mb-6 md:text-3xl">
              What is BizSimpl <span className="ml-1">Startup</span>?
            </h2>
            <div className="flex flex-col space-y-6">
              <p className="text-gray-600 text-base">
                BizSimpl Startup is a platform dedicated to empowering entrepreneurs in launching their businesses. We offer free consultations to help founders choose the right business structure, as well as assist in their formation and registration, ensuring a smooth and hassle-free process.
              </p>
            </div>
          </div>
          
          {/* Right column - Stats Cards (now in a single div) */}
          <div className="reveal self-start mt-0">
            <CustomCard className="h-full">
              <div className="grid grid-cols-2 gap-4 p-4 py-0">
                <div className="flex flex-col items-center text-center py-[5px] px-0">
                  <h3 className="text-secondary mb-2 text-4xl font-extrabold">400+</h3>
                  <p className="text-gray-600 text-sm">Businesses trust us</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-secondary mb-2 font-bold text-4xl">500+</h3>
                  <p className="text-gray-600 text-sm">Businesses Incorporated</p>
                </div>
                
                <div className="flex flex-col items-center text-center py-[6px]">
                  <h3 className="font-bold text-secondary mb-2 text-4xl">95%</h3>
                  <p className="text-gray-600 text-sm">Success Rate</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-bold text-secondary mb-2 text-4xl">10+</h3>
                  <p className="text-gray-600 text-sm">Years Of Experience</p>
                </div>
              </div>
            </CustomCard>
          </div>
        </div>
      </div>
    </section>;
};
export default BizSimplInfo;