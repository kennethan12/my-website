import React from 'react';
import IntroPage from './components/IntroPage'
import AboutPage from './components/AboutPage'
import ExperiencePage from './components/ExperiencePage'
import PortfolioPage from './components/PortfolioPage'
import './App.css';

function App() {
  return (
    <div>
      <AboutPage />
      <ExperiencePage />
      <PortfolioPage />
    </div>
  );
}

export default App;
