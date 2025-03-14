
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CustomButton } from '@/components/ui/CustomButton';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Clock, Shield, FileText, Users, Building, Briefcase, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

const Pricing = () => {
  const [selectedBusinessType, setSelectedBusinessType] = useState('pvt-ltd');
  
  // Business structure pricing plans
  const businessTypes = {
    'pvt-ltd': {
      title: 'Private Limited Company',
      icon: <Building className="h-6 w-6 text-bizsimpl-600" />,
      description: 'Best for startups, growing businesses, and companies seeking investment.',
      basePrice: 7999,
      govtFees: 'Additional',
      processingTime: '10-15 working days',
      packages: [
        {
          name: 'Basic',
          price: 7999,
          features: [
            'Name approval assistance',
            'Company incorporation',
            'Digital signatures (2 directors)',
            'PAN & TAN registration',
            'Share certificates',
            'Basic compliance setup'
          ]
        },
        {
          name: 'Standard',
          price: 11999,
          popular: true,
          features: [
            'Everything in Basic',
            'GST registration',
            'Bank account assistance',
            'Accounting software (3 months)',
            'Company rubber stamp',
            'Business email setup'
          ]
        },
        {
          name: 'Premium',
          price: 16999,
          features: [
            'Everything in Standard',
            'ESI & PF registration',
            'Professional tax registration',
            'IEC registration for import/export',
            'MSME registration',
            'Trademark filing assistance'
          ]
        }
      ]
    },
    'llp': {
      title: 'Limited Liability Partnership',
      icon: <Briefcase className="h-6 w-6 text-bizsimpl-600" />,
      description: 'Ideal for professional services and partnerships with limited liability.',
      basePrice: 6999,
      govtFees: 'Additional',
      processingTime: '12-18 working days',
      packages: [
        {
          name: 'Basic',
          price: 6999,
          features: [
            'Name reservation',
            'LLP incorporation',
            'Digital signatures (2 partners)',
            'PAN registration',
            'LLP agreement drafting',
            'Basic compliance setup'
          ]
        },
        {
          name: 'Standard',
          price: 9999,
          popular: true,
          features: [
            'Everything in Basic',
            'GST registration',
            'Bank account assistance',
            'Accounting software (3 months)',
            'Professional tax registration',
            'Business email setup'
          ]
        },
        {
          name: 'Premium',
          price: 14999,
          features: [
            'Everything in Standard',
            'ESI & PF registration',
            'IEC registration for import/export',
            'MSME registration',
            'Trademark filing assistance',
            'Annual compliance (1st year)'
          ]
        }
      ]
    },
    'opc': {
      title: 'One Person Company',
      icon: <UserRound className="h-6 w-6 text-bizsimpl-600" />,
      description: 'Perfect for solo entrepreneurs who want limited liability protection.',
      basePrice: 7499,
      govtFees: 'Additional',
      processingTime: '10-15 working days',
      packages: [
        {
          name: 'Basic',
          price: 7499,
          features: [
            'Name approval assistance',
            'OPC incorporation',
            'Digital signature (1 director)',
            'PAN & TAN registration',
            'Nominee appointment',
            'Basic compliance setup'
          ]
        },
        {
          name: 'Standard',
          price: 10999,
          popular: true,
          features: [
            'Everything in Basic',
            'GST registration',
            'Bank account assistance',
            'Accounting software (3 months)',
            'Company rubber stamp',
            'Business email setup'
          ]
        },
        {
          name: 'Premium',
          price: 15999,
          features: [
            'Everything in Standard',
            'Professional tax registration',
            'IEC registration for import/export',
            'MSME registration',
            'Trademark filing assistance',
            'Annual compliance (1st year)'
          ]
        }
      ]
    }
  };

  const selectedType = businessTypes[selectedBusinessType as keyof typeof businessTypes];

  // Benefits list
  const benefits = [
    { 
      icon: <Clock className="h-6 w-6 text-bizsimpl-600" />,  
      title: 'Fast Processing', 
      description: 'Get your company registered faster than traditional methods.'
    },
    { 
      icon: <Shield className="h-6 w-6 text-bizsimpl-600" />,  
      title: 'Complete Compliance', 
      description: 'Ensure your business meets all regulatory requirements.'
    },
    { 
      icon: <FileText className="h-6 w-6 text-bizsimpl-600" />,  
      title: 'Digital Documentation', 
      description: 'All documentation handled digitally for convenience.'
    },
    { 
      icon: <Users className="h-6 w-6 text-bizsimpl-600" />,  
      title: 'Expert Support', 
      description: 'Access to business registration specialists throughout the process.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bizsimpl-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Transparent pricing for <span className="text-gradient">your business journey</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Choose the right business structure and package that fits your needs, 
                with no hidden costs and complete transparency.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Business Type Selection */}
        <section className="py-8">
          <div className="container mx-auto px-6 lg:px-8">
            <Tabs defaultValue="pvt-ltd" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger 
                  value="pvt-ltd" 
                  className="flex items-center justify-center gap-2"
                  onClick={() => setSelectedBusinessType('pvt-ltd')}
                >
                  <Building className="h-4 w-4" />
                  <span>Private Limited</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="llp" 
                  className="flex items-center justify-center gap-2"
                  onClick={() => setSelectedBusinessType('llp')}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>LLP</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="opc" 
                  className="flex items-center justify-center gap-2"
                  onClick={() => setSelectedBusinessType('opc')}
                >
                  <UserRound className="h-4 w-4" />
                  <span>One Person Company</span>
                </TabsTrigger>
              </TabsList>
              
              {Object.keys(businessTypes).map((type) => (
                <TabsContent key={type} value={type} className="mt-0">
                  <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-bizsimpl-50 p-3 rounded-lg">
                        {businessTypes[type as keyof typeof businessTypes].icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {businessTypes[type as keyof typeof businessTypes].title}
                        </h2>
                        <p className="text-gray-600">
                          {businessTypes[type as keyof typeof businessTypes].description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-4 text-sm">
                          <div className="bg-gray-50 px-3 py-1 rounded-full text-gray-700">
                            Starting from ₹{businessTypes[type as keyof typeof businessTypes].basePrice}
                          </div>
                          <div className="bg-gray-50 px-3 py-1 rounded-full text-gray-700">
                            Govt Fees: {businessTypes[type as keyof typeof businessTypes].govtFees}
                          </div>
                          <div className="bg-gray-50 px-3 py-1 rounded-full text-gray-700">
                            {businessTypes[type as keyof typeof businessTypes].processingTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Pricing Plans */}
        <section className="py-8">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selectedType.packages.map((pkg, index) => (
                  <motion.div 
                    key={index}
                    className={`bg-white rounded-xl overflow-hidden shadow-lg border ${pkg.popular ? 'border-bizsimpl-500' : 'border-gray-100'} relative`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-bizsimpl-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    )}
                    <div className={`p-6 ${pkg.popular ? 'bg-bizsimpl-50' : 'bg-gray-50'}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-gray-900">₹{pkg.price}</span>
                        <span className="text-gray-600 ml-2">+ Govt. Fees</span>
                      </div>
                      <CustomButton 
                        size="lg" 
                        className="w-full"
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </CustomButton>
                    </div>
                    <div className="p-6">
                      <h4 className="font-medium text-gray-900 mb-4">What's included:</h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-bizsimpl-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center text-sm text-gray-500">
                <p className="flex items-center justify-center">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Need help choosing? <Link to="/contact" className="ml-1 text-bizsimpl-600 font-medium">Contact our experts</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of choosing Bizsimpl</h2>
              <p className="text-lg text-gray-600">
                We make business registration simple, affordable, and hassle-free
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-bizsimpl-50 p-3 rounded-lg inline-block mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our pricing and packages
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "What government fees apply for company registration?",
                  answer: "Government fees vary based on the authorized capital for Private Limited companies and LLPs. For a standard setup, government fees start at around ₹3,500. Our team will provide you with the exact amount based on your specific requirements."
                },
                {
                  question: "How long does the registration process take?",
                  answer: "The registration timeline depends on the business structure and documentation readiness. Typically, a Private Limited company takes 10-15 working days, LLPs take 12-18 working days, and One Person Companies take 10-15 working days from the submission of all required documents."
                },
                {
                  question: "Do I need to visit any government offices during the process?",
                  answer: "No, our process is completely online. You don't need to visit any government offices. We handle all the paperwork and filings on your behalf."
                },
                {
                  question: "What documents will I need to provide?",
                  answer: "You'll need to provide identity proof (Aadhaar/PAN), address proof, and photographs of all directors/partners. For registered office, you'll need ownership proof or NOC from the owner. Our team will guide you through the specific requirements."
                },
                {
                  question: "Can I upgrade my package later?",
                  answer: "Yes, you can upgrade to a higher package at any time. You'll only need to pay the difference in price plus any additional services you select."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="mb-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-bizsimpl-800 to-bizsimpl-600 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start your business journey?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Join thousands of entrepreneurs who have successfully registered their businesses with Bizsimpl.
              </p>
              <CustomButton size="lg" className="bg-white text-bizsimpl-700 hover:bg-gray-100">
                Get Started Today
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
