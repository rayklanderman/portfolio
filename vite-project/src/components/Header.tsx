import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-image-container">
          <img 
            src="./assets/profile.png" 
            alt="Raymond Klanderman" 
            className="profile-image"
          />
        </div>
        <div className="text-content">
          <h1>Raymond Klanderman</h1>
          <p className="subtitle">Software Developer | AI Prompt Engineer | Creative</p>
          <div className="cta-buttons">
            <a href="/cv.pdf" download className="download-cv">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
