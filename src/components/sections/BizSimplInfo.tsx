
import React, { useEffect, useRef } from 'react';
import { User, Clock, Award, MapPin, CheckCircle } from 'lucide-react';
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
  return <section ref={infoRef} id="about" className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 items-start">
          {/* Left column - What is BizSimpl Startup */}
          <div className="reveal lg:col-span-6">
            <h2 className="font-bold mb-6 text-3xl">
              <span className="text-gray-800">What is </span>
              <span className="text-purple-700">BizSimpl Startup?</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              BizSimpl Startup is a platform dedicated to empowering entrepreneurs in launching their businesses. We offer free consultations to help founders choose the right business structure, as well as assist in their formation and registration, ensuring a smooth and hassle-free process.
            </p>
          </div>
          
          {/* Right column - Stats */}
          <div className="reveal lg:col-span-6 mt-8 lg:mt-0">
            <div className="grid grid-cols-3 grid-rows-2 gap-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-purple-700">1000+</h3>
                <p className="text-gray-500 text-sm">Businesses trust us</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-purple-700">500+</h3>
                <p className="text-gray-500 text-sm">Businesses Incorporated</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-purple-700">10+</h3>
                <p className="text-gray-500 text-sm">Years Of Experience</p>
              </div>
              
              {/* New Stat 1 */}
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-purple-700">50+</h3>
                <p className="text-gray-500 text-sm">Expert Consultants</p>
              </div>
              
              {/* New Stat 2 */}
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-purple-700">12+</h3>
                <p className="text-gray-500 text-sm">States Covered</p>
              </div>
              
              {/* New Success Rate Stat */}
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-purple-700">96%</h3>
                <p className="text-gray-500 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BizSimplInfo;
