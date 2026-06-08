import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, id }) => {
  return (
    <section id={id} className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;

export const SectionContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="space-y-8">{children}</div>
);

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ className = '', children, hover = true }) => (
  <motion.div
    className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 ${hover ? 'hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700' : 'shadow-lg'} transition-all duration-300 ${className}`}
    whileHover={hover ? { y: -5 } : undefined}
  >
    {children}
  </motion.div>
);

export const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div className="flex items-start gap-3" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
    <CheckCircle2 className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={20} />
    <span className="text-gray-700 dark:text-gray-300">{children}</span>
  </motion.div>
);
