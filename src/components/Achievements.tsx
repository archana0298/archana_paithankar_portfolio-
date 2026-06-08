import React from 'react';
import { motion } from 'framer-motion';
import Section, { Card } from './Section';
import { achievements, education, awards } from '../data';
import { Award, GraduationCap, BarChart3 } from 'lucide-react';

const Achievements: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <Section title="Achievements & Education" id="achievements">
      {/* Stats */}
      <motion.div
        className="mb-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <BarChart3 className="text-blue-600 dark:text-blue-400" />
          Key Metrics & Impact
        </h3>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((stat, idx) => (
            <motion.div key={idx} variants={item}>
              <Card hover={false}>
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {stat.metric}
                </motion.div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Awards */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <Award className="text-yellow-600 dark:text-yellow-400" />
          Awards & Recognition
        </h3>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, idx) => (
            <motion.div key={idx} variants={item}>
              <Card>
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Award className="text-yellow-600 dark:text-yellow-400" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{award.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{award.organization}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{award.year}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <GraduationCap className="text-blue-600 dark:text-blue-400" />
          Education
        </h3>
        <motion.div
          className="space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, idx) => (
            <motion.div key={idx} variants={item}>
              <Card>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{edu.years}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Achievements;
