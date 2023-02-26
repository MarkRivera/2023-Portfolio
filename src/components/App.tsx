import { useEffect } from 'react';
import AnimatedLogo from './AnimatedLogo';


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
    <>
      <AnimatedLogo />
      <main>Hi</main>
    </>
  )
}

export default App
