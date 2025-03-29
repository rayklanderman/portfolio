import './LanguageSwitcher.scss';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'en', countryCode: 'GB' },
    { code: 'nl', countryCode: 'NL' },
    { code: 'fr', countryCode: 'FR' }
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={lang.code.toUpperCase()}
        >
          <ReactCountryFlag
            countryCode={lang.countryCode}
            svg
            style={{
              width: '1.2em',
              height: '1.2em'
            }}
            title={lang.code.toUpperCase()}
          />
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;
