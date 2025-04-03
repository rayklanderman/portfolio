import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Badge {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  issuer: string;
  issueDate: string;
  skills?: string[];
}

interface Education {
  id: string;
  name: string;
  institution: string;
  period: string;
  status: 'Ongoing' | 'Completed';
  description: string[];
  skills: string[];
  badges?: string[];
}

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  techStack: Array<{
    name: string;
    percentage: number;
  }>;
  additionalTech?: string[];
}

const CV: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 'sauti',
      name: t('projects.items.sauti.name'),
      description: t('projects.items.sauti.description'),
      url: 'https://civic-engagement-fabric-one.vercel.app/',
      techStack: [
        { name: 'TypeScript', percentage: 92.2 },
        { name: 'CSS', percentage: 3.8 },
        { name: 'JavaScript', percentage: 1.9 },
        { name: 'PLpgSQL', percentage: 1.3 },
        { name: 'Other', percentage: 0.8 }
      ]
    },
    {
      id: 'aiHealth',
      name: t('projects.items.aiHealth.name'),
      description: t('projects.items.aiHealth.description'),
      url: 'https://ai-health-chat.vercel.app/',
      techStack: [
        { name: 'TypeScript', percentage: 69.6 },
        { name: 'JavaScript', percentage: 12.5 },
        { name: 'CSS', percentage: 12.2 },
        { name: 'HTML', percentage: 5.7 }
      ],
      additionalTech: ['Supabase']
    },
    {
      id: 'dutch',
      name: t('projects.items.dutch.name'),
      description: t('projects.items.dutch.description'),
      url: 'https://dutchlearning.vercel.app/',
      techStack: [
        { name: 'JavaScript', percentage: 98.6 },
        { name: 'HTML', percentage: 1.3 },
        { name: 'CSS', percentage: 0.1 }
      ]
    },
    {
      id: 'civic',
      name: t('projects.items.civic.name'),
      description: t('projects.items.civic.description'),
      url: 'https://civic-alert-lite.web.app/',
      techStack: [
        { name: 'JavaScript', percentage: 59.4 },
        { name: 'HTML', percentage: 21.5 },
        { name: 'CSS', percentage: 19.1 }
      ],
      additionalTech: ['Firebase']
    },
    {
      id: 'kpesa',
      name: t('projects.items.kpesa.name'),
      description: t('projects.items.kpesa.description'),
      url: 'https://github.com/rayklanderman/k-pesa',
      techStack: [
        { name: 'Dart', percentage: 85.0 },
        { name: 'SQL', percentage: 10.0 },
        { name: 'Other', percentage: 5.0 }
      ],
      additionalTech: ['Flutter', 'MySQL']
    }
  ];

  const education: Education[] = [
    {
      id: 'alx',
      name: t('education.items.alx.name'),
      institution: t('education.items.alx.institution'),
      period: '2025 - Present',
      status: 'Ongoing',
      description: t('education.items.alx.description', { returnObjects: true }) as string[],
      skills: ['SQL', 'Power BI', 'Tableau', 'Agile']
    },
    {
      id: 'worldquant_cv',
      name: t('education.items.worldquant_cv.name'),
      institution: t('education.items.worldquant_cv.institution'),
      period: '2025',
      status: 'Ongoing',
      description: t('education.items.worldquant_cv.description', { returnObjects: true }) as string[],
      skills: ['Deep Learning', 'Computer Vision', 'AI']
    },
    {
      id: 'worldquant_ds',
      name: t('education.items.worldquant_ds.name'),
      institution: t('education.items.worldquant_ds.institution'),
      period: '2025',
      status: 'Ongoing',
      description: t('education.items.worldquant_ds.description', { returnObjects: true }) as string[],
      skills: ['Data Science', 'Machine Learning', 'Analytics']
    },
    {
      id: 'stanford',
      name: t('education.items.stanford.name'),
      institution: t('education.items.stanford.institution'),
      period: '2024',
      status: 'Completed',
      description: t('education.items.stanford.description', { returnObjects: true }) as string[],
      skills: ['Python', 'Programming Fundamentals'],
      badges: ['Diagnostic Badge', 'Final Project Badge']
    },
    {
      id: 'mua',
      name: t('education.items.mua.name'),
      institution: t('education.items.mua.institution'),
      period: '2021-2024',
      status: 'Completed',
      description: t('education.items.mua.description', { returnObjects: true }) as string[],
      skills: ['Software Development', 'IT Infrastructure', 'Project Management']
    }
  ];

  const badges: Badge[] = [
    {
      id: 'responsible_ai_privacy',
      name: t('badges.items.responsible_ai_privacy.name'),
      url: 'https://www.cloudskillsboost.google/public_profiles/5d88baf2-c5cf-40af-bc9e-e995812ff504/badges/13899903',
      imageUrl: '/badges/responsible-ai-privacy.svg',
      issuer: t('badges.items.responsible_ai_privacy.issuer'),
      issueDate: '2024-03-15',
      skills: t('badges.items.responsible_ai_privacy.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'responsible_ai_transparency',
      name: t('badges.items.responsible_ai_transparency.name'),
      url: 'https://www.cloudskillsboost.google/public_profiles/5d88baf2-c5cf-40af-bc9e-e995812ff504/badges/13900213',
      imageUrl: '/badges/responsible-ai-transparency.svg',
      issuer: t('badges.items.responsible_ai_transparency.issuer'),
      issueDate: '2024-03-20',
      skills: t('badges.items.responsible_ai_transparency.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'cybersecurity',
      name: t('badges.items.cybersecurity.name'),
      url: 'https://www.credly.com/badges/1b491137-814a-4f22-b67e-c4ea05586626',
      imageUrl: '/badges/cybersecurity.svg',
      issuer: t('badges.items.cybersecurity.issuer'),
      issueDate: '2024-03-25',
      skills: t('badges.items.cybersecurity.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'ibm_data',
      name: t('badges.items.ibm_data.name'),
      url: 'https://www.credly.com/badges/9951d70b-194f-44b8-91af-ee174cc73483/public_url',
      imageUrl: '/badges/ibm-data.svg',
      issuer: t('badges.items.ibm_data.issuer'),
      issueDate: '2024-01-01',
      skills: t('badges.items.ibm_data.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'google_cloud',
      name: t('badges.items.google_cloud.name'),
      url: 'https://www.cloudskillsboost.google/public_profiles/5d88baf2-c5cf-40af-bc9e-e995812ff504',
      imageUrl: '/badges/google-cloud.svg',
      issuer: t('badges.items.google_cloud.issuer'),
      issueDate: '2024-02-01',
      skills: t('badges.items.google_cloud.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'mlops',
      name: t('badges.items.mlops.name'),
      url: 'https://www.cloudskillsboost.google/public_profiles/5d88baf2-c5cf-40af-bc9e-e995812ff504',
      imageUrl: '/badges/mlops.svg',
      issuer: t('badges.items.mlops.issuer'),
      issueDate: '2024-03-01',
      skills: t('badges.items.mlops.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'oracle_cloud',
      name: t('badges.items.oracle_cloud.name'),
      url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=example',
      imageUrl: '/badges/oracle-cloud.svg',
      issuer: t('badges.items.oracle_cloud.issuer'),
      issueDate: '2024-04-01',
      skills: t('badges.items.oracle_cloud.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'stem',
      name: t('badges.items.stem.name'),
      url: 'https://example.com/badges/stem',
      imageUrl: '/badges/stem.svg',
      issuer: t('badges.items.stem.issuer'),
      issueDate: '2024-05-01',
      skills: t('badges.items.stem.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'responsible_ai',
      name: t('badges.items.responsible_ai.name'),
      url: 'https://www.cloudskillsboost.google/public_profiles/5d88baf2-c5cf-40af-bc9e-e995812ff504',
      imageUrl: '/badges/responsible-ai.svg',
      issuer: t('badges.items.responsible_ai.issuer'),
      issueDate: '2024-06-01',
      skills: t('badges.items.responsible_ai.skills', { returnObjects: true }) as string[]
    },
    {
      id: 'prompt_design',
      name: t('badges.items.prompt_design.name'),
      url: 'https://www.cloudskillsboost.google/public_profiles/5d88baf2-c5cf-40af-bc9e-e995812ff504',
      imageUrl: '/badges/prompt-design.svg',
      issuer: t('badges.items.prompt_design.issuer'),
      issueDate: '2024-07-01',
      skills: t('badges.items.prompt_design.skills', { returnObjects: true }) as string[]
    }
  ];

  return (
    <motion.section 
      className="cv-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cv-content">
        <motion.div 
          className="profile-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          id="profile"
        >
          <h2>{t('profile.title')}</h2>
          <p>{t('profile.description')}</p>
        </motion.div>

        <motion.div 
          className="projects-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          id="projects"
        >
          <h2>{t('projects.title')}</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  <strong>{project.name}</strong>
                </a>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-item">
                      {tech.name}
                    </span>
                  ))}
                  {project.additionalTech?.map((tech, techIndex) => (
                    <span key={`additional-${techIndex}`} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="education-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          id="education"
        >
          <h2>{t('education.title')}</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                className="education-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="education-header">
                  <h3>{edu.name}</h3>
                  <span className={`status ${edu.status.toLowerCase()}`}>
                    {t(`education.${edu.status.toLowerCase()}`)}
                  </span>
                </div>
                <div className="education-details">
                  <div className="institution-info">
                    <span className="institution">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                  <ul className="education-description">
                    {(edu.description as string[]).map((desc: string, i: number) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="skills-list">
                    {edu.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  {edu.badges && (
                    <div className="badges-list">
                      {edu.badges.map((badge, i) => (
                        <span key={i} className="badge-item">{badge}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="badges-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          id="badges"
        >
          <h2>{t('badges.title')}</h2>
          <div className="badges-grid">
            {badges.map((badge, index) => (
              <motion.a
                key={badge.id}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="badge-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="badge-image">
                  <img src={badge.imageUrl} alt={badge.name} loading="lazy" />
                </div>
                <div className="badge-details">
                  <h3>{badge.name}</h3>
                  <div className="badge-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="badge-issuer">{badge.issuer}</div>
                  <div className="badge-date">{badge.issueDate}</div>
                  {badge.skills && (
                    <div className="badge-skills">
                      {badge.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="badge-verify">
                  {t('badges.verify')}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CV;
