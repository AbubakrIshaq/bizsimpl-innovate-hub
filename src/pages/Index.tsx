
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Registration from '@/components/sections/Registration';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';

const Index = () => {
  useEffect(() => {
    // Intersection Observer to handle reveal animations
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
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleGetStarted = () => {
    window.location.href = "https://accounts.razorpay.com/auth/?redirecturl=https%3A%2F%2Feasy.razorpay.com%2Frize%2Fincorporation%2Fonboarding%3Fvisitor_id%3D601a54dd81d8e--1f62992176b2e%26utm_source%3Ddirect%26utm_medium%3Dwebsite%26section_source%3Dnavbar&product=rize_incorporation";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Registration />
        <Benefits />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to simplify your business journey?
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Join thousands of businesses that trust Bizsimpl for their registration and compliance needs.
              </p>
              <div className="inline-flex gap-4">
                <a 
                  onClick={handleGetStarted}
                  className="px-6 py-3 rounded-lg bg-bizsimpl-600 text-white font-medium hover:bg-bizsimpl-700 transition-colors cursor-pointer"
                >
                  Get Started Now
                </a>
                <a href="#" className="px-6 py-3 rounded-lg border border-bizsimpl-200 text-bizsimpl-700 font-medium hover:bg-bizsimpl-50 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
