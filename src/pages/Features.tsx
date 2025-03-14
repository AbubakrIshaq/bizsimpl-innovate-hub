
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, ArrowRight, Shield, Clock, Users, CreditCard, Briefcase, FileText } from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      id: 0,
      title: "Business Registration Simplified",
      description: "Register your company in just a few days with our streamlined process that handles all the paperwork.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      image: "/features-registration.jpg",
      benefits: [
        "Company name availability check",
        "Director and shareholder setup",
        "Complete documentation preparation",
        "Government fee processing",
        "Digital certificate delivery"
      ]
    },
    {
      id: 1,
      title: "Compliance Management",
      description: "Stay compliant with all regulatory requirements with our automated compliance management system.",
      icon: <Shield className="h-8 w-8" />,
      color: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      image: "/features-compliance.jpg",
      benefits: [
        "Automated compliance calendar",
        "Timely filing reminders",
        "Document storage and management",
        "Regulatory updates and alerts",
        "Annual compliance reports"
      ]
    },
    {
      id: 2,
      title: "Business Banking Integration",
      description: "Seamlessly open bank accounts and manage finances with our banking integration partners.",
      icon: <CreditCard className="h-8 w-8" />,
      color: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      image: "/features-banking.jpg",
      benefits: [
        "Business account setup assistance",
        "Digital banking integration",
        "Payment processing solutions",
        "Financial dashboard and reporting",
        "Multi-currency support"
      ]
    },
    {
      id: 3,
      title: "Documentation Automation",
      description: "Generate and manage all required business documents automatically with our smart templates.",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      image: "/features-documents.jpg",
      benefits: [
        "Smart document generation",
        "Digital signature integration",
        "Secure document storage",
        "Version control and audit trail",
        "Template customization"
      ]
    },
    {
      id: 4,
      title: "Dedicated Support Team",
      description: "Get personalized assistance from our experts who guide you through every step of your business journey.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
      image: "/features-support.jpg",
      benefits: [
        "Dedicated account manager",
        "Expert consultation calls",
        "Priority support channels",
        "Business setup guidance",
        "Industry-specific advice"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powerful features to 
                <span className="text-gradient"> simplify your business</span>
              </h1>
              <p className="text-lg text-gray-600">
                Discover how Bizsimpl streamlines every aspect of business registration and compliance, 
                so you can focus on what matters - growing your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16" ref={featuresRef}>
              {/* Feature Tabs */}
              <div className="lg:col-span-2 flex flex-col space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                      activeFeature === index 
                        ? `${feature.color} ${feature.borderColor} shadow-md` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className={`p-3 rounded-lg mr-4 ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 ${activeFeature === index ? feature.textColor : 'text-gray-900'}`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Feature Details */}
              <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <div className="w-full h-64 bg-gradient-to-r from-bizsimpl-100 to-bizsimpl-50 flex items-center justify-center">
                      <div className={`p-6 rounded-full ${features[activeFeature].color}`}>
                        {features[activeFeature].icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className={`text-2xl font-bold mb-4 ${features[activeFeature].textColor}`}>
                      {features[activeFeature].title}
                    </h2>
                    <p className="text-gray-700 mb-6">
                      {features[activeFeature].description}
                    </p>
                    <div className="space-y-3">
                      {features[activeFeature].benefits.map((benefit, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Check className={`h-5 w-5 mr-3 ${features[activeFeature].textColor}`} />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <button className={`flex items-center text-sm font-medium ${features[activeFeature].textColor}`}>
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Timeline Section */}
            <div className="max-w-5xl mx-auto mt-24 relative">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How Bizsimpl Works</h2>
                <p className="text-lg text-gray-600">Our streamlined process makes business registration effortless</p>
              </div>
              
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    step: "1",
                    title: "Select your business type",
                    description: "Choose the right business structure that fits your needs.",
                    icon: <Briefcase className="h-6 w-6" />,
                    color: "bg-bizsimpl-600"
                  },
                  {
                    step: "2",
                    title: "Complete your details",
                    description: "Fill in your information with our guided form process.",
                    icon: <Users className="h-6 w-6" />,
                    color: "bg-bizsimpl-500"
                  },
                  {
                    step: "3",
                    title: "Submit documents",
                    description: "Upload required documents through our secure portal.",
                    icon: <FileText className="h-6 w-6" />,
                    color: "bg-bizsimpl-400"
                  },
                  {
                    step: "4",
                    title: "Receive certification",
                    description: "Get your business registration certificate digitally.",
                    icon: <Shield className="h-6 w-6" />,
                    color: "bg-bizsimpl-300"
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white text-2xl font-bold mb-4 shadow-lg`}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="mt-32 bg-gradient-to-r from-bizsimpl-50 to-bizsimpl-100 rounded-2xl p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "10,000+", label: "Businesses Registered", color: "text-bizsimpl-700" },
                  { value: "24/7", label: "Expert Support", color: "text-bizsimpl-600" },
                  { value: "99%", label: "Customer Satisfaction", color: "text-bizsimpl-700" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
