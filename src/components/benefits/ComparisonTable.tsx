
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Zap, DollarSign, ShieldCheck, BadgeCheck,
  Building, Globe, Headset, MapPin, User
} from 'lucide-react';

interface ComparisonItem {
  traditional: string;
  bizsimpl: string;
  icon: React.ReactNode;
}

const ComparisonTable = () => {
  const comparisonPoints: ComparisonItem[] = [
    {
      traditional: "Multiple office visits & paperwork",
      bizsimpl: "100% online process",
      icon: <Clock className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "30-45 days processing time",
      bizsimpl: "Fast-track registration in 7-15 days",
      icon: <Zap className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "High lawyer & consultation fees",
      bizsimpl: "Transparent, affordable pricing",
      icon: <DollarSign className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "Manual compliance tracking",
      bizsimpl: "Automated compliance alerts",
      icon: <ShieldCheck className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "Limited expert access",
      bizsimpl: "Dedicated support team",
      icon: <BadgeCheck className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "No bank account assistance",
      bizsimpl: "Bank account opening assistance",
      icon: <Building className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "Local incorporation only",
      bizsimpl: "Global Inc Assistance",
      icon: <Globe className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "Multiple points of contact",
      bizsimpl: "Single POC",
      icon: <Headset className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "Physical office address required",
      bizsimpl: "Virtual office address",
      icon: <MapPin className="h-5 w-5 text-purple-700" />
    },
    {
      traditional: "Generic advice",
      bizsimpl: "Personalised guidance",
      icon: <User className="h-5 w-5 text-purple-700" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-purple-700 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why choose Bizsimpl?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See how we compare to traditional business registration methods
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 bg-gray-100 text-purple-700 font-semibold">
            <div className="p-4 border-r border-gray-200"></div>
            <div className="p-4 border-r border-gray-200 text-center">Traditional Process</div>
            <div className="p-4 text-center text-purple-700">Bizsimpl Advantage</div>
          </div>
          
          {comparisonPoints.map((point, index) => (
            <motion.div 
              key={index} 
              className="grid grid-cols-3 border-t border-gray-200"
              variants={itemVariants}
            >
              <div className="p-4 border-r border-gray-200 flex items-center">
                <div className="bg-purple-50 p-2 rounded-full mr-3">
                  {point.icon}
                </div>
              </div>
              <div className="p-4 border-r border-gray-200 flex items-center text-black">
                {point.traditional}
              </div>
              <div className="p-4 flex items-center font-medium text-black">
                {point.bizsimpl}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
