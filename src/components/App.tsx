import { useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import AnimatedLogo from './AnimatedLogo';
import HeroSection from './HeroSection';


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
    <main className='mt-20'>
      <AnimatedLogo />

      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* About */}

      {/* Resume */}

      {/* Projects */}
      <section className='h-[200vh]'>Hi</section>
    </main>
  )
}

export default App
