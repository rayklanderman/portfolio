import { FC } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  url: string;
  description: string;
}

const Projects: FC = () => {
  const projects: Project[] = [
    {
      title: 'Kenyanese',
      url: 'https://kenyanese.online',
      description: 'Social networking site designed to connect and share content for Kenyans. It was established in 2024 and offers a variety of functionalities, including creating profiles, posting updates, joining groups, and private messaging through its messaging feature. Here\'s a general breakdown of the tech stack: Front-end: HTML5, CSS3, JavaScript, ReactJS Back-end: Node.js, Express.js Database: MongoDB'
    },
    {
      title: 'Weather Notification App',
      url: 'https://github.com/rayklanderman/CODE-IN-PLACE-',
      description: 'A Python-based desktop application that delivers real-time weather updates directly to your desktop. It utilizes the OpenWeather API to fetch weather data and leverages the Plyer library to display informative notifications.'
    },
    {
      title: 'Stream Alive WebMeet',
      url: 'https://streamalive.online/webmeet/',
      description: 'Webmeet utilizes Jitsi\'s open-source WebRTC technology for its core video conferencing features. This allows Webmeet to offer real-time video and audio streaming. By leveraging Jitsi\'s robust tech stack, Webmeet provides a feature-rich WebRTC web conferencing experience.'
    }
  ];

  return (
    <section id="projects" className="container">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="project-item">
        {projects.map((project, index) => (
          <motion.p
            key={index}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn glossy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <strong>{project.title}</strong>
            </motion.a>
            {project.description}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default Projects;
