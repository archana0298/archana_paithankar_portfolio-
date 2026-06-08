import React from 'react';
import { motion } from 'framer-motion';
import Section, { Card } from './Section';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my projects',
      href: personalInfo.github,
    },
  ];

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
    <Section title="Get in Touch" subtitle="Open to opportunities and excited to connect with recruiters" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* CTA */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm actively looking for React Developer, Frontend Engineer, and Full Stack Developer roles. Let's connect and discuss how I can add value to your team!
          </p>
          <Button variant="primary" size="lg" href={`mailto:${personalInfo.email}`}>
            <Mail size={20} />
            Send me an Email
          </Button>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx} variants={item}>
                <motion.a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block h-full"
                  whileHover={{ y: -5 }}
                >
                  <Card hover={true}>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                      >
                        <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                        <p className="font-semibold text-gray-900 dark:text-white break-all">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 text-center border-t border-gray-200 dark:border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Built with <Heart className="text-red-500" size={16} /> using React & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            © 2026 Archana Paithankar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
