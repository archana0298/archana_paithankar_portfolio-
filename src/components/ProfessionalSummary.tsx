import React from 'react';
import { motion } from 'framer-motion';
import Section, { Card } from './Section';
import { professionalSummary } from '../data';
import { ArrowRight } from 'lucide-react';

const ProfessionalSummary: React.FC = () => {
  return (
    <Section title="Professional Summary" id="summary">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card hover={false}>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {professionalSummary}
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            {[
              { label: 'Full Stack Focused', value: 'React & Backend' },
              { label: 'Enterprise Experience', value: '500+ Users' },
              { label: 'Performance Expert', value: '40%+ Optimization' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{item.label}</p>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

export default ProfessionalSummary;
