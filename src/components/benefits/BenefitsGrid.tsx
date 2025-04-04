
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, DollarSign, ShieldCheck, BadgeCheck, 
  Zap, HeartHandshake, BarChart, FileCheck, 
  CloudOff, UserPlus
} from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const BenefitsGrid = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  
  const benefits: BenefitItem[] = [
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

  return (
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
  );
};

export default BenefitsGrid;
