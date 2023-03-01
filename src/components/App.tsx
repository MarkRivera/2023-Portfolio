import { useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import AnimatedLogo from './AnimatedLogo';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';


function App() {

  function applyPrimaryStyles() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.add("bg-primary", "text-white");
    }
  };

  useEffect(() => {
    applyPrimaryStyles();
  }, [])

  return (
    <main className='mt-20 max-w-7xl mx-auto relative'>
      <AnimatedLogo />

      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Resume */}
      <ResumeSection />

      {/* Projects */}
    </main>
  )
}

export default App
