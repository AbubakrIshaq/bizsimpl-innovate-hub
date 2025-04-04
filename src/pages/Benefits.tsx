
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BenefitsHero from '@/components/benefits/BenefitsHero';
import BenefitsGrid from '@/components/benefits/BenefitsGrid';
import ComparisonTable from '@/components/benefits/ComparisonTable';
import SuccessStories from '@/components/benefits/SuccessStories';
import BenefitsCTA from '@/components/benefits/BenefitsCTA';

const Benefits = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <BenefitsHero />
        <BenefitsGrid />
        <ComparisonTable />
        <SuccessStories />
        <BenefitsCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Benefits;
