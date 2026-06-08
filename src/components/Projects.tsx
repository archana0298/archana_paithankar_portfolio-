import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { Card, FeatureItem } from './Section';
import { projects } from '../data';
import { Code2, Target, Star, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map(p => p.category)));
  const filtered = filter ? projects.filter(p => p.category === filter) : projects;

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
    },
  };

  return (
    <Section title="Featured Projects" subtitle="Production-ready applications with measurable impact" id="projects">
      {/* Filter Buttons */}
      <motion.div className="flex flex-wrap gap-3 justify-center mb-12" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <motion.button
          onClick={() => setFilter(null)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            filter === null
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Projects
        </motion.button>
        {categories.map(cat => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === cat
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AnimatePresence mode="wait">
          {filtered.map(project => (
            <motion.div
              key={project.id}
              variants={item}
              layout
              exit={{ opacity: 0, y: 20 }}
            >
              <Card>
                <div className="space-y-5">
                  {/* Header */}
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">{project.title}</h3>
                      <motion.span
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.impact}</p>
                  </div>

                  {/* Problem */}
                  <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Target size={16} className="text-red-600 dark:text-red-400" />
                      Problem
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-green-50 dark:bg-green-900/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Star size={16} className="text-green-600 dark:text-green-400" />
                      Solution
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{project.solution}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Code2 size={16} />
                      Tech Stack
                    </p>
                    <motion.div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
                    <motion.a
                      href="#"
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium text-center transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      View Project
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects;
