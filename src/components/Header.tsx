import './Header.scss';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import CVRequestModal from './CVRequestModal';
import { FaGithub, FaLinkedin, FaEnvelope, FaShareAlt } from 'react-icons/fa';
import { SiCredly, SiGooglecloud } from 'react-icons/si';
import { motion } from 'framer-motion';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const menuItems = [
    { id: 'profile', label: t('menu.profile') },
    { id: 'projects', label: t('menu.projects') },
    { id: 'education', label: t('menu.education') },
    { id: 'badges', label: t('menu.badges') }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/rayklanderman',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/raymondklanderman/',
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
          <nav className="menu-buttons">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                className={`menu-button ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleScrollTo(item.id)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
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
            <button className="download-cv" onClick={handleOpenModal}>
              {t('header.downloadCV')}
            </button>
            <button className="share-button" onClick={handleShare}>
              <FaShareAlt /> {t('header.share')}
            </button>
          </div>
          {isModalOpen && <CVRequestModal onClose={handleCloseModal} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
