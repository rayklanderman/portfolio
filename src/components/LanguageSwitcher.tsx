import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'nl', name: t('language.nl') },
    { code: 'fr', name: t('language.fr') }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.div 
      className="language-switcher"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`language-btn ${i18n.language === lang.code ? 'active' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.name}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;
