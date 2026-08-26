import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Pricing from '../sections/Pricing';
import GitHubSection from '../sections/GitHub';
// import Certifications from '../sections/Certifications'; // 🔒 Hidden for now — uncomment to re-enable
// import Testimonials from '../sections/Testimonials';     // 🔒 Hidden for now — uncomment to re-enable
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import { pageTransition } from '../utils/animations';

const Home: React.FC = () => {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Skills />
      <Experience />
      <Projects />
      <GitHubSection />
      {/* <Certifications /> */} {/* 🔒 Hidden for now — uncomment to re-enable */}
      {/* <Testimonials /> */}   {/* 🔒 Hidden for now — uncomment to re-enable */}
      <Contact />
      <Footer />
    </motion.main>
  );
};

export default Home;
