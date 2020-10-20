import React from 'react';
import AboutPage from './components/AboutPage'
import ExperiencePage from './components/ExperiencePage'
import PortfolioPage from './components/PortfolioPage'
import SkillsPage from './components/SkillsPage'
import ContactPage from './components/ContactPage'
import './App.css';

function App() {
  return (
    <div>
      <AboutPage />
      <ExperiencePage />
      <PortfolioPage />
      <SkillsPage />
      <ContactPage />
    </div>
  );
}

export default App;
