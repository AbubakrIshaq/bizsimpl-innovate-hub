
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Benefits from '@/components/sections/Benefits';
import Registration from '@/components/sections/Registration';
import BizSimplInfo from '@/components/sections/BizSimplInfo';
import Testimonials from '@/components/sections/Testimonials';
import StatsSection from '@/components/sections/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BizSimplInfo />
        <Services />
        <Benefits />
        <Registration />
        <StatsSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
