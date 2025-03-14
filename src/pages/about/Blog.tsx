
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/CustomButton';
import { 
  Search,
  Calendar,
  User,
  Tag,
  ArrowRight
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const featuredPosts = [
    {
      title: "How to Choose the Right Business Structure for Your Startup",
      excerpt: "Explore the pros and cons of different business structures to make an informed decision for your startup's future.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Priya Patel",
      date: "Oct 15, 2023",
      category: "Business Tips",
      featured: true
    },
    {
      title: "5 Common Mistakes to Avoid When Registering Your Company",
      excerpt: "Learn about the pitfalls many entrepreneurs face during the registration process and how to avoid them.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Vikram Mehta",
      date: "Sep 28, 2023",
      category: "Legal Advice",
      featured: true
    },
    {
      title: "Understanding GST Registration: A Complete Guide",
      excerpt: "Everything you need to know about GST registration requirements, process, and compliance in India.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Rahul Sharma",
      date: "Sep 12, 2023",
      category: "Taxation",
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: "The Ultimate Checklist for New Business Owners",
      excerpt: "A comprehensive checklist covering all the essential steps for setting up a successful business in India.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Ananya Singh",
      date: "Oct 5, 2023",
      category: "Entrepreneurship"
    },
    {
      title: "How to Register a Trademark for Your Business",
      excerpt: "A step-by-step guide to protecting your brand identity with trademark registration in India.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Vikram Mehta",
      date: "Sep 22, 2023",
      category: "Legal Advice"
    },
    {
      title: "Managing Business Compliance: Monthly, Quarterly, and Annual Requirements",
      excerpt: "Stay on top of your business compliance with this comprehensive calendar of requirements.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Priya Patel",
      date: "Sep 15, 2023",
      category: "Compliance"
    },
    {
      title: "Digital Banking Solutions for Small Businesses",
      excerpt: "Discover the best digital banking solutions to streamline your business finances and operations.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Rahul Sharma",
      date: "Aug 30, 2023",
      category: "Finance"
    },
    {
      title: "How to Draft a Solid Partnership Agreement",
      excerpt: "Essential clauses and considerations for creating a partnership agreement that protects all parties.",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Vikram Mehta",
      date: "Aug 18, 2023",
      category: "Legal Advice"
    },
    {
      title: "Tax Saving Strategies for New Businesses",
      excerpt: "Legal ways to minimize your tax burden while ensuring compliance with Indian tax laws.",
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1000&h=667",
      author: "Ananya Singh",
      date: "Aug 10, 2023",
      category: "Taxation"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-bizsimpl-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Bizsimpl <span className="text-gradient">Blog</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Expert insights on business registration, compliance, and entrepreneurship in India
              </motion.p>
              
              <motion.div
                className="relative max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 py-6 rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-bizsimpl-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      Featured
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center mr-4">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <CustomButton size="sm" variant="ghost" className="mt-auto self-start">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </CustomButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-40">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <CustomButton size="sm" variant="ghost" className="mt-auto self-start">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </CustomButton>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <CustomButton size="lg">
                Load More Articles
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-bizsimpl-800 to-bizsimpl-600 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-10 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-white/80 mb-8">
                  Get the latest business tips, legal updates, and company registration insights delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-grow"
                  />
                  <CustomButton className="bg-white text-bizsimpl-700 hover:bg-gray-100">
                    Subscribe
                  </CustomButton>
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

export default Blog;
