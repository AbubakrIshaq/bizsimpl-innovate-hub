
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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Registration />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
