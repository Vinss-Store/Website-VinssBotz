import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback untuk memastikan loading tidak stuck
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Maksimal 5 detik loading

    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Jika ada error atau skip loading, tampilkan konten langsung
  if (typeof window !== 'undefined' && window.location.search.includes('skip-loading')) {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <ParticleBackground />
          <Navbar />
          <Hero />
          <Features />
          <About />
          <Stats />
          <Pricing />
          <FAQ />
          <Footer />
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <div key="content">
              <ParticleBackground />
              <Navbar />
              <Hero />
              <Features />
              <About />
              <Stats />
              <Pricing />
              <FAQ />
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
