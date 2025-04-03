import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="container">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {t('projects.title')}
      </motion.h2>
      <div className="projects-container">
        {Object.entries(t('projects.items', { returnObjects: true })).map(([key, project]: [string, any], index) => (
          <motion.div
            key={key}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`project-card project-${index + 1}`}
          >
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title btn glossy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <strong>{project.name}</strong>
            </motion.a>
            <p className="project-description">{project.description}</p>
            <motion.div 
              className="project-tech"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + 0.2 }}
            >
              {project.technologies?.map((tech: string, techIndex: number) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
