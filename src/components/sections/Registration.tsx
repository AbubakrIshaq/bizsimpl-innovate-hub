
import React, { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { CustomButton } from '../ui/CustomButton';
import { CustomCard } from '../ui/CustomCard';

const Registration = () => {
  const regRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = regRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Choose your business structure',
      description: 'Select the right business structure from Private Limited, LLP, OPC, or Partnership Firm based on your needs.'
    },
    {
      number: '02',
      title: 'Complete digital KYC',
      description: 'Verify your identity quickly with our secure digital KYC process — no physical paperwork needed.'
    },
    {
      number: '03',
      title: 'Submit required documents',
      description: 'Upload all necessary documents directly through our platform. Our experts will review for accuracy.'
    },
    {
      number: '04',
      title: 'Get your registration certificate',
      description: 'Receive your digital registration certificate and start your business operations right away.'
    }
  ];

  const benefits = [
    'End-to-end digital process',
    'Zero paperwork required',
    'Transparent pricing',
    'Expert assistance throughout',
    'Complimentary compliance alerts',
    'Secure document storage'
  ];

  return (
    <section ref={regRef} className="py-20 bg-gradient-blue" id="registration">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="reveal reveal-left inline-block px-3 py-1 mb-4 text-sm font-medium text-bizsimpl-700 bg-white rounded-full">
              Hassle-free Process
            </span>
            
            <h2 className="reveal reveal-left text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Company Registrations, <br />
              <span className="text-gradient">simplified</span>
            </h2>
            
            <p className="reveal reveal-left text-lg text-gray-700 mb-8">
              Register your company in days, not weeks. Our streamlined process eliminates paperwork, reduces costs, and accelerates your business journey.
            </p>
            
            <div className="reveal reveal-left space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizsimpl-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="reveal reveal-left">
              <CustomButton size="lg">
                Start Registration <ArrowRight size={16} className="ml-2" />
              </CustomButton>
            </div>
          </div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="reveal reveal-right"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CustomCard variant="glass" className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-bizsimpl-100 text-bizsimpl-700 flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CustomCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
