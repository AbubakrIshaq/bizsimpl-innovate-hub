
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/CustomButton';
import { Download, ExternalLink, Calendar } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: "Bizsimpl Raises $5M Series A to Simplify Business Registration in India",
      date: "October 2, 2023",
      excerpt: "Funding will be used to expand services, enhance technology, and reach more entrepreneurs across India.",
      link: "#"
    },
    {
      title: "Bizsimpl Launches New Platform to Streamline Company Registration Process",
      date: "July 15, 2023",
      excerpt: "The new platform reduces registration time by 40% and offers a more user-friendly experience.",
      link: "#"
    },
    {
      title: "Bizsimpl Partners with Major Banks to Offer Seamless Business Banking Solutions",
      date: "April 8, 2023",
      excerpt: "Strategic partnerships will provide entrepreneurs with integrated banking services during company formation.",
      link: "#"
    },
    {
      title: "Bizsimpl Expands Operations to 10 New Cities Across India",
      date: "January 20, 2023",
      excerpt: "Expansion brings localized business registration services to entrepreneurs in tier 2 and 3 cities.",
      link: "#"
    }
  ];

  const mediaAppearances = [
    {
      outlet: "Economic Times",
      title: "How Bizsimpl is Revolutionizing Business Registration in India",
      date: "September 12, 2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/ET_Logo.svg/320px-ET_Logo.svg.png",
      link: "#"
    },
    {
      outlet: "YourStory",
      title: "Bizsimpl: Making Entrepreneurship Accessible for All Indians",
      date: "August 5, 2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/YourStory_Logo_%282%29.png",
      link: "#"
    },
    {
      outlet: "Inc42",
      title: "How Bizsimpl Grew 300% During the Pandemic by Solving Real Problems",
      date: "June 18, 2023",
      image: "https://inc42.com/wp-content/uploads/2023/07/inc42-logo-1.png",
      link: "#"
    },
    {
      outlet: "Mint",
      title: "Bizsimpl CEO on the Future of Business Registration and Compliance",
      date: "May 3, 2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Mint_newspaper_logo.svg",
      link: "#"
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
                Press <span className="text-gradient">Room</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Latest news, press releases, and media resources about Bizsimpl
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CustomButton>
                  <Download className="mr-2 h-4 w-4" /> Download Press Kit
                </CustomButton>
                <CustomButton variant="outline">
                  Media Inquiries
                </CustomButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Releases</h2>
              
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {release.date}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{release.title}</h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    <a 
                      href={release.link} 
                      className="inline-flex items-center text-bizsimpl-600 hover:text-bizsimpl-700 font-medium"
                    >
                      Read Full Release <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Appearances */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Appearances</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mediaAppearances.map((media, index) => (
                  <motion.a 
                    key={index}
                    href={media.link}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-24 mr-4 flex items-center">
                        <img 
                          src={media.image} 
                          alt={media.outlet} 
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {media.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{media.title}</h3>
                    <div className="flex items-center text-bizsimpl-600 text-sm font-medium">
                      Read Article <ExternalLink className="ml-1 h-3 w-3" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Assets</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Logos & Graphics</h3>
                  <p className="text-gray-600 mb-6">
                    Download our official logos, icons, and graphic elements in various formats for press use.
                  </p>
                  <CustomButton variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download Logo Pack
                  </CustomButton>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Photos</h3>
                  <p className="text-gray-600 mb-6">
                    High-resolution photographs of our leadership team for media publications.
                  </p>
                  <CustomButton variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download Photo Pack
                  </CustomButton>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-bizsimpl-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Contact</h2>
              <p className="text-lg text-gray-600 mb-6">
                For press inquiries, interview requests, or additional information, please contact our media relations team.
              </p>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-md mx-auto">
                <div className="text-left space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Media Relations</h3>
                    <p className="text-bizsimpl-600">press@bizsimpl.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Press;
