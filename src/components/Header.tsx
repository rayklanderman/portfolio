import './Header.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import CVRequestModal from './CVRequestModal';
import { FaGithub, FaLinkedin, FaEnvelope, FaShareAlt } from 'react-icons/fa';
import { SiCredly, SiGooglecloud } from 'react-icons/si';
import { motion } from 'framer-motion';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Raymond Klanderman - Portfolio',
          text: t('share.message'),
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast.success(t('share.copied'), {
        position: "bottom-right",
        autoClose: 3000
      });
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/rayklanderman',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/rayklanderman',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:rayklanderman@gmail.com',
      label: 'Email'
    },
    {
      icon: <SiCredly />,
      url: 'https://www.credly.com/users/rayklanderman/',
      label: 'Credly Profile'
    },
    {
      icon: <SiGooglecloud />,
      url: 'https://www.cloudskillsboost.google/public_profiles/5d88baf2-c5cf-40af-bc9e-e995812ff504',
      label: 'Google Cloud Skills'
    }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-image-container">
          <img 
            src="/images/profile.png" 
            alt="Raymond Klanderman" 
            className="profile-image"
          />
        </div>
        <div className="text-content">
          <h1>Raymond Klanderman</h1>
          <p className="subtitle">{t('header.subtitle')}</p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={link.label}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <div className="cta-buttons">
            <button onClick={handleOpenModal} className="download-cv">
              {t('header.downloadCV')}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </button>
            <button onClick={handleShare} className="share-button">
              {t('header.share')}
              <FaShareAlt />
            </button>
            {isModalOpen && <CVRequestModal onClose={handleCloseModal} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
