import { FC } from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python']
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Node.js', 'Flutter', 'Django', 'Flask']
    }
  ];

  return (
    <section id="skills" className="container">
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            {category.title}
          </motion.h2>
          <div className="skills-buttons">
            {category.skills.map((skill, index) => (
              <motion.button
                key={index}
                className={`glossy ${skill.toLowerCase()}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
