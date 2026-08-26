import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/shared/LoadingScreen';
import ScrollProgress from './components/shared/ScrollProgress';
import CustomCursor from './components/shared/CustomCursor';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading — remove or adjust as needed
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          {/* Global overlays */}
          <CustomCursor />
          <ScrollProgress />
          <LoadingScreen isLoading={isLoading} />

          {/* App shell */}
          {!isLoading && (
            <>
              <Navbar />
              <AnimatedRoutes />
            </>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
