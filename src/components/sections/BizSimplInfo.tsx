
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

  return (
    <section ref={infoRef} id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - What is BizSimpl Startup */}
          <div className="reveal">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-gray-800">What is</span> <span className="text-secondary">BizSimpl Startup?</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed max-w-2xl">
              BizSimpl Startup is an exclusive early-stage startup program that empowers founders by providing seamless company incorporation services & offering dedicated startup building programs & resources.
            </p>
          </div>
          
          {/* Right column - Stats */}
          <div className="grid grid-cols-1 gap-y-8 self-start">
            <div className="reveal flex items-baseline" style={{ transitionDelay: '0ms' }}>
              <h3 className="text-5xl lg:text-6xl font-bold text-blue-500 mr-6">400+</h3>
              <p className="text-gray-600 text-lg">
                Founders in the<br />Community
              </p>
            </div>
            
            <div className="reveal flex items-baseline" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-5xl lg:text-6xl font-bold text-blue-500 mr-6">500+</h3>
              <p className="text-gray-600 text-lg">
                Company<br />Registrations
              </p>
            </div>
            
            <div className="reveal flex items-baseline" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-5xl lg:text-6xl font-bold text-blue-500 mr-6">10+</h3>
              <p className="text-gray-600 text-lg">
                BizSimpl-backed<br />Startups
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizSimplInfo;
