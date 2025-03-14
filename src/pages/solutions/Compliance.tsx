
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/CustomButton';
import { 
  AlertCircle,
  Bell,
  ClipboardCheck,
  Shield,
  Calendar,
  FileText,
  Check
} from 'lucide-react';

const Compliance = () => {
  const features = [
    {
      icon: <AlertCircle className="h-6 w-6 text-bizsimpl-600" />,
      title: "Compliance Monitoring",
      description: "Track all your compliance requirements and stay updated on regulatory changes affecting your business."
    },
    {
      icon: <Bell className="h-6 w-6 text-bizsimpl-600" />,
      title: "Automated Reminders",
      description: "Never miss a filing deadline with timely alerts and notifications for upcoming compliance tasks."
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-bizsimpl-600" />,
      title: "Document Management",
      description: "Securely store and organize all your compliance documents in a centralized digital repository."
    },
    {
      icon: <Calendar className="h-6 w-6 text-bizsimpl-600" />,
      title: "Compliance Calendar",
      description: "View all your compliance deadlines on an interactive calendar with color-coded priorities."
    },
    {
      icon: <Shield className="h-6 w-6 text-bizsimpl-600" />,
      title: "Expert Support",
      description: "Get guidance from compliance experts who understand the regulatory landscape for your business."
    },
    {
      icon: <FileText className="h-6 w-6 text-bizsimpl-600" />,
      title: "Regulatory Reporting",
      description: "Generate compliance reports to keep stakeholders informed and prepare for regulatory audits."
    }
  ];

  const complianceTypes = [
    {
      title: "Corporate Compliance",
      items: [
        "Annual General Meetings",
        "Board Meeting Minutes",
        "Director Appointments & Resignations",
        "Shareholding Pattern Updates",
        "Annual Returns Filing"
      ]
    },
    {
      title: "Tax Compliance",
      items: [
        "GST Returns Filing",
        "TDS Returns",
        "Income Tax Returns",
        "Advance Tax Payments",
        "Tax Audit Requirements"
      ]
    },
    {
      title: "Labor Compliance",
      items: [
        "PF & ESI Filings",
        "Professional Tax",
        "Labor Welfare Fund",
        "Shops & Establishment Act",
        "Contract Labor Regulations"
      ]
    },
    {
      title: "Industry-Specific",
      items: [
        "FSSAI Compliance for Food Businesses",
        "RBI Compliance for Financial Services",
        "SEBI Compliance for Listed Companies",
        "Environmental Clearances",
        "Sector-Specific Licenses Renewal"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bizsimpl-50 to-white overflow-hidden relative">
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Business Compliance <span className="text-gradient">Made Simple</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Stay compliant with legal and regulatory requirements without the hassle and complexity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CustomButton size="lg">
                    Get Started
                  </CustomButton>
                  <CustomButton size="lg" variant="outline">
                    Talk to an Expert
                  </CustomButton>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000&h=800" 
                  alt="Compliance Management" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-radial from-bizsimpl-100/40 to-transparent rounded-full -z-10"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-radial from-bizsimpl-100/40 to-transparent rounded-full -z-10"></div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Compliance Solutions
              </h2>
              <p className="text-lg text-gray-600">
                All the tools you need to stay on top of your compliance requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-bizsimpl-50 p-3 rounded-lg inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Compliance Areas We Cover
              </h2>
              <p className="text-lg text-gray-600">
                From corporate filings to tax returns, we've got all your compliance needs covered
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceTypes.map((type, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                  <ul className="space-y-3">
                    {type.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-bizsimpl-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Calendar Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <motion.div
                  className="lg:col-span-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Never Miss a Compliance Deadline
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our interactive compliance calendar keeps track of all your filing deadlines and sends timely reminders to ensure you stay compliant.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Personalized compliance calendar for your business",
                      "Color-coded tasks based on urgency and importance",
                      "Email and SMS reminders before due dates",
                      "One-click access to required forms and documents",
                      "Historical compliance record to track past filings"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-bizsimpl-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <CustomButton>
                    View Compliance Calendar
                  </CustomButton>
                </motion.div>
                
                <motion.div
                  className="lg:col-span-7 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1606627000096-032ce1a82a8e?auto=format&fit=crop&q=80&w=1000&h=667" 
                    alt="Compliance Calendar" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Support */}
        <section className="py-20 bg-bizsimpl-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <motion.div
                  className="lg:col-span-7 lg:order-last"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Expert Guidance at Every Step
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our team of compliance experts is always available to provide personalized guidance and support for your specific compliance needs.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Access to certified compliance professionals",
                      "Industry-specific compliance guidance",
                      "Help with complex regulatory requirements",
                      "Assistance with compliance document preparation",
                      "Regular updates on regulatory changes affecting your business"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-bizsimpl-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <CustomButton>
                    Connect with an Expert
                  </CustomButton>
                </motion.div>
                
                <motion.div
                  className="lg:col-span-5 lg:order-first rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000&h=667" 
                    alt="Compliance Experts" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-bizsimpl-800 to-bizsimpl-600 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to simplify your compliance journey?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Join thousands of businesses that trust us to keep them compliant and penalty-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton size="lg" className="bg-white text-bizsimpl-700 hover:bg-gray-100">
                  Get Started Today
                </CustomButton>
                <CustomButton size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a Consultation
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Compliance;
