
import React, { useEffect, useRef } from 'react';
import { CustomCard } from '../ui/CustomCard';
import { FileText, UserPlus, ShieldCheck, RefreshCw } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = servicesRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const services = [
    {
      icon: <FileText className="h-8 w-8 text-bizsimpl-600" />,
      title: 'Company Registration',
      description: 'Register your business quickly and easily with our streamlined process.',
    },
    {
      icon: <UserPlus className="h-8 w-8 text-bizsimpl-600" />,
      title: 'Director Identification',
      description: 'Simplified KYC process for director verification and authentication.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-bizsimpl-600" />,
      title: 'Compliance Management',
      description: 'Stay compliant with automated reminders and expert guidance.',
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-bizsimpl-600" />,
      title: 'Annual Renewals',
      description: 'Hassle-free renewals with timely notifications and assistance.',
    },
  ];

  return (
    <section ref={servicesRef} className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal reveal-up inline-block px-3 py-1 mb-4 text-sm font-medium text-bizsimpl-700 bg-bizsimpl-50 rounded-full">
            Our Services
          </span>
          <h2 className="reveal reveal-up text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything you need to manage your business
          </h2>
          <p className="reveal reveal-up text-lg text-gray-600">
            From registration to compliance, we've got you covered with our suite of services designed to simplify your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="reveal reveal-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CustomCard 
                variant="elevated" 
                isHoverable 
                className="h-full flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 bg-bizsimpl-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CustomCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
