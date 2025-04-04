
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const BenefitCard = ({ icon, title, description, color, delay }: BenefitCardProps) => {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className={`p-6 bg-gradient-to-r ${color}`}>
        <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
