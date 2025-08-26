import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/ui/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images or other resources here if needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <Layout key="content">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Experience />
            <Contact />
          </Layout>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
