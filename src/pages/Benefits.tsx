
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Clock, DollarSign, ShieldCheck, BadgeCheck, 
  Zap, HeartHandshake, BarChart, FileCheck, 
  CloudOff, UserPlus
} from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Save Time",
      description: "Register your company up to 70% faster with our streamlined digital process.",
      color: "from-blue-500 to-blue-600",
      delay: 0.1
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Reduce Costs",
      description: "Minimize expenses with transparent pricing and no hidden charges.",
      color: "from-purple-500 to-purple-600",
      delay: 0.2
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Stay Compliant",
      description: "Automatic compliance alerts and assistance to keep your business in good standing.",
      color: "from-green-500 to-green-600",
      delay: 0.3
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-white" />,
      title: "Expert Support",
      description: "Access to experienced professionals who guide you through every step.",
      color: "from-amber-500 to-amber-600",
      delay: 0.4
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Efficiency",
      description: "All business services centralized in one user-friendly platform.",
      color: "from-pink-500 to-pink-600",
      delay: 0.5
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-white" />,
      title: "Peace of Mind",
      description: "Focus on your business while we handle the regulatory complexity.",
      color: "from-indigo-500 to-indigo-600",
      delay: 0.6
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "Data Insights",
      description: "Track your registration progress and get insights on compliance status.",
      color: "from-teal-500 to-teal-600",
      delay: 0.7
    },
    {
      icon: <FileCheck className="h-8 w-8 text-white" />,
      title: "Paperless Process",
      description: "Eco-friendly digital documentation that reduces paper waste.",
      color: "from-emerald-500 to-emerald-600",
      delay: 0.8
    },
    {
      icon: <CloudOff className="h-8 w-8 text-white" />,
      title: "Offline Support",
      description: "Continue your applications even with limited internet connectivity.",
      color: "from-rose-500 to-rose-600",
      delay: 0.9
    },
    {
      icon: <UserPlus className="h-8 w-8 text-white" />,
      title: "Team Collaboration",
      description: "Invite team members to collaborate on business registration.",
      color: "from-cyan-500 to-cyan-600",
      delay: 1.0
    }
  ];

  const comparisonPoints = [
    {
      traditional: "Multiple office visits & paperwork",
      bizsimpl: "100% online process",
      icon: <Clock className="h-5 w-5 text-bizsimpl-600" />
    },
    {
      traditional: "30-45 days processing time",
      bizsimpl: "Fast-track registration in 7-15 days",
      icon: <Zap className="h-5 w-5 text-bizsimpl-600" />
    },
    {
      traditional: "High lawyer & consultation fees",
      bizsimpl: "Transparent, affordable pricing",
      icon: <DollarSign className="h-5 w-5 text-bizsimpl-600" />
    },
    {
      traditional: "Manual compliance tracking",
      bizsimpl: "Automated compliance alerts",
      icon: <ShieldCheck className="h-5 w-5 text-bizsimpl-600" />
    },
    {
      traditional: "Limited expert access",
      bizsimpl: "Dedicated support team",
      icon: <BadgeCheck className="h-5 w-5 text-bizsimpl-600" />
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bizsimpl-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Benefits that make a <span className="text-gradient">real difference</span>
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
        
        {/* Main Benefits Grid */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: benefit.delay }}
                >
                  <div className={`p-6 bg-gradient-to-r ${benefit.color}`}>
                    <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/90 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Comparison Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
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
              <div className="grid grid-cols-3 bg-gray-100 text-gray-800 font-semibold">
                <div className="p-4 border-r border-gray-200"></div>
                <div className="p-4 border-r border-gray-200 text-center">Traditional Process</div>
                <div className="p-4 text-center text-bizsimpl-700">Bizsimpl Advantage</div>
              </div>
              
              {comparisonPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="grid grid-cols-3 border-t border-gray-200"
                  variants={itemVariants}
                >
                  <div className="p-4 border-r border-gray-200 flex items-center">
                    <div className="bg-bizsimpl-50 p-2 rounded-full mr-3">
                      {point.icon}
                    </div>
                  </div>
                  <div className="p-4 border-r border-gray-200 flex items-center text-gray-600">
                    {point.traditional}
                  </div>
                  <div className="p-4 flex items-center font-medium text-bizsimpl-700">
                    {point.bizsimpl}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Real success stories
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                See how businesses have benefited from our services
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "TechStart Solutions",
                  description: "Registered as a Private Limited Company in just 12 days. Saved approximately ₹25,000 in legal consultation fees.",
                  benefit: "Time and cost savings",
                  color: "border-blue-500"
                },
                {
                  name: "Green Harvest Co.",
                  description: "Our compliance system helped them avoid penalties worth ₹50,000 by ensuring timely regulatory filings.",
                  benefit: "Compliance assurance",
                  color: "border-green-500"
                },
                {
                  name: "CreativeMinds LLP",
                  description: "Transformed from proprietorship to LLP seamlessly with our expert guidance, enabling 40% business growth.",
                  benefit: "Expert guidance",
                  color: "border-purple-500"
                }
              ].map((story, index) => (
                <motion.div 
                  key={index}
                  className={`p-6 rounded-xl border-l-4 ${story.color} bg-white shadow-md`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="text-sm font-medium text-bizsimpl-600">
                    Key benefit: {story.benefit}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-bizsimpl-900 to-bizsimpl-700 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Ready to experience these benefits?
              </motion.h2>
              <motion.p 
                className="text-lg text-white/80 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Join thousands of businesses that trust Bizsimpl for their registration and compliance needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="/pricing"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-bizsimpl-700 font-medium hover:bg-gray-100 transition-colors"
                >
                  View our pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const ArrowRight = (props: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export default Benefits;
