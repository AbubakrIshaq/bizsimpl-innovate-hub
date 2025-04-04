
import React from 'react';
import { motion } from 'framer-motion';

const BenefitsHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-bizsimpl-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-purple-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Benefits that make a <span className="text-purple-700">real difference</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We've revolutionized the business registration process to save you time, 
            money, and hassle. Discover how Bizsimpl gives you the advantage.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsHero;
