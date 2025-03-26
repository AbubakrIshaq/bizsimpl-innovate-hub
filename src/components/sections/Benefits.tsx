
import React, { useEffect, useRef } from 'react';
import { CustomCard } from '../ui/CustomCard';
import { Clock, DollarSign, ShieldCheck, BadgeCheck, Zap, HeartHandshake } from 'lucide-react';

const Benefits = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = benefitsRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-purple-700" />,
      title: 'Save Time',
      description: 'Register your company up to 70% faster with our streamlined digital process.'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-purple-700" />,
      title: 'Reduce Costs',
      description: 'Minimize expenses with transparent pricing and no hidden charges.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-purple-700" />,
      title: 'Stay Compliant',
      description: 'Automatic compliance alerts and assistance to keep your business in good standing.'
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-purple-700" />,
      title: 'Expert Support',
      description: 'Access to experienced professionals who guide you through every step.'
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-700" />,
      title: 'Efficiency',
      description: 'All business services centralized in one user-friendly platform.'
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-purple-700" />,
      title: 'Peace of Mind',
      description: 'Focus on your business while we handle the regulatory complexity.'
    }
  ];

  return (
    <section ref={benefitsRef} className="py-20" id="benefits">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal reveal-up inline-block px-3 py-1 mb-4 text-sm font-medium text-purple-700 bg-purple-50 rounded-full">
            Why Choose Us
          </span>
          <h2 className="reveal reveal-up text-3xl md:text-4xl font-bold text-purple-700 mb-6">
            Benefits that make a <span className="text-purple-700">difference</span>
          </h2>
          <p className="reveal reveal-up text-lg text-gray-600">
            Our innovative approach to business registration and compliance delivers tangible advantages that help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="reveal reveal-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CustomCard variant="outlined" className="h-full">
                <div className="flex items-start">
                  <div className="p-3 bg-purple-50 rounded-lg mr-4 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </CustomCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
