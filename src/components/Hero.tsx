import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';
import { personalInfo, achievements } from '../data';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handleDownloadResume = () => {
    window.open('./Archana_Paithankar_React_JS_Dev_CV_May_2026.pdf', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center pt-20 pb-12 px-4 md:px-8">
      <div className="max-w-7xl w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Content */}
          <motion.div className="space-y-8" variants={item}>
            {/* Badges */}
            <motion.div className="flex flex-wrap gap-3" variants={item}>
              <Badge variant="success">Open to Opportunities</Badge>
              <Badge variant="primary">Immediate Joiner</Badge>
              <Badge variant="accent">React Specialist</Badge>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={item}>
              <motion.h1
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {personalInfo.name}
              </motion.h1>
              <motion.p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                {personalInfo.headline}
              </motion.p>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              className="flex items-center gap-3 text-lg"
              variants={item}
            >
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{personalInfo.yearsOfExperience}</span>
              <span className="text-gray-600 dark:text-gray-400">Years of Proven Experience</span>
            </motion.div>

            {/* Summary */}
            <motion.p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" variants={item}>
              Building scalable, high-performance web applications with React.js and TypeScript. Expert in performance optimization, reusable architectures, and enterprise-grade solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={item}>
              <a
                href="https://github.com/archana0298/Resume/blob/main/Archana_Paithankar_React_JS_Dev_CV_May_2026.pdf"
                download="Archana_Paithankar_Resume.pdf"
              >
                <Button variant="primary" size="lg">
                  <Download size={20} />
                  Download Resume
                </Button>
              </a>
              <Button variant="outline" size="lg">
                <Mail size={20} />
                <a href={`mailto:${personalInfo.email}`}>Get in Touch</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-4 pt-4" variants={item}>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={item}
          >
            {achievements.slice(0, 4).map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.metric}
                </motion.div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
