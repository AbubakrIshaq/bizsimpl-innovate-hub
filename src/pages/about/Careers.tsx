
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/CustomButton';
import { Building, Users, Star, Heart, Clock, MapPin } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Legal Compliance Specialist",
      department: "Legal",
      location: "Mumbai",
      type: "Full-Time"
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Bangalore",
      type: "Full-Time"
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-Time"
    },
    {
      title: "Business Development Representative",
      department: "Sales",
      location: "Delhi",
      type: "Full-Time"
    },
    {
      title: "Content Writer - Legal",
      department: "Marketing",
      location: "Remote",
      type: "Part-Time"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Join Our <span className="text-purple-700">Team</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Help us simplify business registration and compliance for entrepreneurs across India
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CustomButton size="lg" className="bg-purple-700 hover:bg-purple-800 text-white">
                  View Open Positions
                </CustomButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-700 mb-4">Why Join Bizsimpl?</h2>
              <p className="text-lg text-gray-600">
                We're building the future of business registration and compliance
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Meaningful Impact",
                  icon: <Building className="h-6 w-6 text-purple-700" />,
                  description: "Help thousands of entrepreneurs start their business journey with ease."
                },
                {
                  title: "Great Culture",
                  icon: <Users className="h-6 w-6 text-purple-700" />,
                  description: "Join a team that values collaboration, innovation, and work-life balance."
                },
                {
                  title: "Growth Opportunities",
                  icon: <Star className="h-6 w-6 text-purple-700" />,
                  description: "Develop your skills and advance your career in a rapidly growing company."
                },
                {
                  title: "Competitive Benefits",
                  icon: <Heart className="h-6 w-6 text-purple-700" />,
                  description: "Enjoy comprehensive health coverage, retirement plans, and more."
                },
                {
                  title: "Flexible Work",
                  icon: <Clock className="h-6 w-6 text-purple-700" />,
                  description: "Balance your work and personal life with our flexible work arrangements."
                },
                {
                  title: "Pan-India Presence",
                  icon: <MapPin className="h-6 w-6 text-purple-700" />,
                  description: "Work from our offices in major cities or remotely from anywhere in India."
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-purple-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-purple-50 p-3 rounded-lg inline-block mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-700 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600">
                Find your perfect role and join our growing team
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-purple-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-700 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                          {position.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {position.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <CustomButton variant="outline" size="sm" className="mt-4 md:mt-0 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white">
                      Apply Now
                    </CustomButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-800 to-purple-600 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-10 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Don't see your perfect role?</h2>
                <p className="text-lg text-white/80 mb-8">
                  We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.
                </p>
                <CustomButton className="bg-white text-purple-700 hover:bg-gray-100">
                  Send Your Resume
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

export default Careers;
