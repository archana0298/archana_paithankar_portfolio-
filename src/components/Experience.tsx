import React from 'react';
import { motion } from 'framer-motion';
import Section, { Card, FeatureItem } from './Section';
import { experiences } from '../data';
import { Calendar, Building2, Trophy } from 'lucide-react';

const Experience: React.FC = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section title="Professional Experience" subtitle="3.5+ years building scalable React applications for enterprise clients" id="experience">
      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, _idx) => (
          <motion.div key={exp.id} variants={item}>
            <Card>
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="text-blue-600 dark:text-blue-400" size={20} />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                  </div>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{exp.designation}</p>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Project Name */}
                {exp.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-blue-50 dark:bg-blue-900/20 px-4 py-3 rounded-lg border-l-4 border-blue-600 dark:border-blue-400 mb-4"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-400">Project</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </p>
                  </div>
                ))}

                {/* Responsibilities */}
                {exp.projects.map((project) => (
                  <div key={project.id} className="mb-6">
                    <h5 className="font-medium text-blue-600 mb-2">
                      {project.name}
                    </h5>

                    {project.responsibilities.map((resp, idx) => (
                      <FeatureItem key={idx}>{resp}</FeatureItem>
                    ))}
                  </div>
                ))}

                {/* Achievements */}
                {exp.projects.map((project) => (
                  <div key={project.id} className="mb-6">
                    <h5 className="font-medium text-green-600 mb-2">
                      {project.name}
                    </h5>

                    {project.achievements.map((ach, idx) => (
                      <FeatureItem key={idx}>{ach}</FeatureItem>
                    ))}
                  </div>
                ))}

                {/* Technologies */}
                <div>
                  {exp.projects.map((project) =>
                    project.technologies.map((tech, idx) => (
                      <motion.span
                        key={`${project.id}-${idx}`}
                        className="px-3 py-1 mx-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
