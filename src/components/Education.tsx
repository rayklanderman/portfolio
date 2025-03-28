import { FC } from 'react';
import { motion } from 'framer-motion';

const Education: FC = () => {
  const educationItems = [
    {
      institution: 'Management University of Africa',
      course: 'Diploma in Information Technology'
    },
    {
      institution: 'Management University of Africa',
      course: 'Bachelor of Business Administration and Management'
    },
    {
      institution: 'The Kenya Institute of Management',
      course: 'Research Methodology & SPSS'
    },
    {
      institution: 'Stanford University (Code In Place)',
      course: 'Introduction to Programming (CS106A)'
    }
  ];

  return (
    <section id="education" className="container">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <ul>
        {educationItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <strong>{item.institution}:</strong> {item.course}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
