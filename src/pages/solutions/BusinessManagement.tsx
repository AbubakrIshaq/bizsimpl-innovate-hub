
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/CustomButton';
import { 
  BarChart3, 
  FileText, 
  Users, 
  Calendar, 
  CreditCard, 
  BarChart2,
  CheckCircle2
} from 'lucide-react';

const BusinessManagement = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-bizsimpl-600" />,
      title: "Financial Management",
      description: "Track income, expenses, and generate financial reports to gain insights into your business performance."
    },
    {
      icon: <FileText className="h-6 w-6 text-bizsimpl-600" />,
      title: "Invoice Management",
      description: "Create professional invoices, track payments, and send automated reminders to ensure timely collections."
    },
    {
      icon: <Users className="h-6 w-6 text-bizsimpl-600" />,
      title: "Customer Relationship",
      description: "Manage customer information, track interactions, and build lasting relationships with your clients."
    },
    {
      icon: <Calendar className="h-6 w-6 text-bizsimpl-600" />,
      title: "Compliance Calendar",
      description: "Never miss important filing dates or compliance deadlines with automated reminders and notifications."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-bizsimpl-600" />,
      title: "Expense Tracking",
      description: "Categorize expenses, capture receipts, and prepare for tax season with organized financial records."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-bizsimpl-600" />,
      title: "Business Analytics",
      description: "Make data-driven decisions with powerful analytics and customizable dashboards for your business."
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
                  Simplify Your <span className="text-gradient">Business Management</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  All-in-one platform to manage finances, invoices, compliance, and growth for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CustomButton size="lg">
                    Get Started
                  </CustomButton>
                  <CustomButton size="lg" variant="outline">
                    Book a Demo
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000&h=800" 
                  alt="Business Management Dashboard" 
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
                Comprehensive Business Management Tools
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to run your business efficiently in one place
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

        {/* Dashboard Preview */}
        <section className="py-20 bg-gray-50">
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
                    Powerful Dashboard for Business Insights
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Get a complete view of your business performance with our intuitive dashboard that highlights key metrics and actionable insights.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Real-time financial overview",
                      "Cash flow forecasting",
                      "Tax liability estimates",
                      "Upcoming compliance deadlines",
                      "Outstanding invoice tracking"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-bizsimpl-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <CustomButton>
                    Explore Dashboard
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000&h=667" 
                    alt="Business Dashboard" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-20">
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
                    Manage Your Business On-the-Go
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Access your business data anytime, anywhere with our mobile app. Stay connected to your business even when you're away from your desk.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Create and send invoices from your phone",
                      "Capture and organize receipts instantly",
                      "Check business performance with mobile dashboards",
                      "Receive real-time notifications for important events",
                      "Manage customer information on the move"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-bizsimpl-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png" 
                      alt="Get it on Google Play" 
                      className="h-10 w-auto"
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png" 
                      alt="Download on the App Store" 
                      className="h-10 w-auto"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  className="lg:col-span-5 lg:order-first rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000&h=1500" 
                    alt="Mobile App" 
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
                Ready to streamline your business operations?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Join thousands of businesses that use our platform to save time, reduce stress, and grow faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton size="lg" className="bg-white text-bizsimpl-700 hover:bg-gray-100">
                  Get Started Today
                </CustomButton>
                <CustomButton size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a Demo
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

export default BusinessManagement;
