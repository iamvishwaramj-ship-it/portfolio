import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import { useTypewriter } from '../hooks/useTypewriter';
import { PERSONAL_INFO, TYPEWRITER_STRINGS } from '../constants/data';
import ParticleBackground from '../components/shared/ParticleBackground';
import { containerVariants, fadeInDown, fadeInUp, staggerItem } from '../utils/animations';

const Hero: React.FC = () => {
  const { displayText } = useTypewriter(TYPEWRITER_STRINGS);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, var(--bg-primary) 0%, #1a0533 40%, #0a1628 70%, var(--bg-primary) 100%)',
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', animationDelay: '3s' }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl animate-float-slow"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)', animationDelay: '1.5s' }}
      />

      {/* Particles */}
      <ParticleBackground />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 mb-6">
              <span
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass"
                style={{ color: 'var(--color-accent-cyan)', borderColor: 'rgba(6,182,212,0.3)' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance
              </span> 
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={staggerItem} className="text-hero font-poppins font-black mb-4">
              <span style={{ color: 'var(--text-primary)' }}>Hi, I'm </span>
              <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={staggerItem} className="text-xl sm:text-2xl font-semibold mb-6 h-10">
              <span style={{ color: 'var(--text-secondary)' }}>I'm a </span>
              <span
                className="font-bold"
                style={{ color: 'var(--color-primary)' }}
              >
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-0.5 inline-block w-0.5 h-6 align-middle"
                style={{ background: 'var(--color-primary)' }}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: 'var(--text-secondary)' }}
            >
              {PERSONAL_INFO.tagline}. Crafting pixel-perfect interfaces and robust backend systems
              that make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {/* <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                aria-label="Contact Vishwaram for hire"
              >
                Hire Me <FaArrowRight className="w-4 h-4" />
              </motion.a> */}

              {/* <motion.a
                href={PERSONAL_INFO.resumeUrl}
                download="Vishwaram_J_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold glass"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Download Vishwaram's resume"
              >
                <FaDownload className="w-4 h-4" /> Download CV
              </motion.a> */}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: <FaGithub className="w-5 h-5" />, href: PERSONAL_INFO.githubUrl, label: 'GitHub' },
                { icon: <FaLinkedin className="w-5 h-5" />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
              ].map(social => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl glass transition-all"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label={`Visit ${social.label} profile`}
                >
                  {social.icon}
                </motion.a>
              ))}

              <div className="w-px h-6 mx-2" style={{ background: 'var(--border-color)' }} />
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {PERSONAL_INFO.pronouns}
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 relative"
          >
            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-20px] rounded-full border border-dashed opacity-20"
              style={{ borderColor: 'var(--color-primary)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-40px] rounded-full border border-dashed opacity-10"
              style={{ borderColor: 'var(--color-accent-cyan)' }}
            />

            {/* Profile image container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              {/* Gradient border */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-white"
                  style={{
                    background: 'linear-gradient(135deg, #1e1b4b, #0f172a)',
                    fontSize: '6rem',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                  }}
                >
                  VJ
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'React', top: '-10px', right: '-10px', color: '#61DAFB' },
                { label: 'Node.js', bottom: '20px', left: '-20px', color: '#339933' },
                { label: 'TS', top: '50%', right: '-30px', color: '#3178C6' },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8 }}
                  className="absolute glass-card px-3 py-1.5 text-xs font-bold rounded-xl"
                  style={{
                    top: badge.top,
                    bottom: badge.bottom,
                    left: badge.left,
                    right: badge.right,
                    color: badge.color,
                    borderColor: badge.color + '40',
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Scroll to About section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
