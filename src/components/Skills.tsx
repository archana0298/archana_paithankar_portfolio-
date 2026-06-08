import React from 'react';
import { motion } from 'framer-motion';
import Section, { Card } from './Section';
import { skillCategories } from '../data';

const Skills: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <Section title="Technical Skills" subtitle="Expertise across frontend, backend, tools, and modern web technologies" id="skills">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} variants={item}>
            <Card>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {category.name}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2 justify-center"
                variants={container}
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
                    variants={skillItem}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
