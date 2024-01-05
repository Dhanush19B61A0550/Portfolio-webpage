import React from 'react';
import './header.css';

export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cst-header">
      <div className="cst-head-left">
        <a href="#" onClick={() => scrollToSection('home')}>
          Madelyn Torff
        </a>
      </div>
      <div className="cst-head-right">
        <a href="#" onClick={() => scrollToSection('about')}>
          About
        </a>
        <a href="#" onClick={() => scrollToSection('projects')}>
          Projects
        </a>
        <a href="#" onClick={() => scrollToSection('contact')}>
          ContactUs
        </a>
      </div>
    </div>
  );
}