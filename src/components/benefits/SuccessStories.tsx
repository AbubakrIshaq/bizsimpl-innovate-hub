
import React from 'react';
import { motion } from 'framer-motion';

interface SuccessStory {
  name: string;
  description: string;
  benefit: string;
  color: string;
}

const SuccessStories = () => {
  const stories: SuccessStory[] = [
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
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-purple-700 mb-4"
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
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-xl border-l-4 ${story.color} bg-white shadow-md`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-black">{story.name}</h3>
              <p className="text-black mb-4">{story.description}</p>
              <div className="text-sm font-medium text-purple-700">
                Key benefit: {story.benefit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
