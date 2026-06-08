import React from 'react';
import { motion } from 'framer-motion';
import Section, { Card, FeatureItem } from './Section';
import { whyHireMe } from '../data';
import { Zap } from 'lucide-react';

const WhyHireMe: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <Section title="Why Hire Me" subtitle="10 Powerful Reasons Recruiters Choose React Developers Like Me" id="why-hire">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {whyHireMe.map((reason, idx) => (
          <motion.div key={idx} variants={item}>
            <Card>
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Zap className="text-blue-600 dark:text-blue-400" size={24} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default WhyHireMe;
