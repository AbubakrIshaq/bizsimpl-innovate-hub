
import React, { useEffect, useRef } from 'react';

const StatsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = statsRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section ref={statsRef} className="py-20 bg-white" id="stats">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-primary mb-6">
            We like numbers too
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="reveal text-center" style={{ transitionDelay: '0ms' }}>
            <h3 className="text-5xl font-bold text-bizsimpl-700 mb-4">12</h3>
            <p className="text-gray-600 text-lg">Local Partnerships</p>
          </div>
          
          <div className="reveal text-center" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-5xl font-bold text-bizsimpl-700 mb-4">40</h3>
            <p className="text-gray-600 text-lg">Years of Experience</p>
          </div>
          
          <div className="reveal text-center" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-5xl font-bold text-bizsimpl-700 mb-4">03</h3>
            <p className="text-gray-600 text-lg">International Awards</p>
          </div>
          
          <div className="reveal text-center" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-5xl font-bold text-bizsimpl-700 mb-4">500+</h3>
            <p className="text-gray-600 text-lg">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
