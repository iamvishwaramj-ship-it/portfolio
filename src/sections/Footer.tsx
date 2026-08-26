import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';
import { PERSONAL_INFO, NAV_LINKS } from '../constants/data';

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}
      role="contentinfo"
    >
      <div className="section-container">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                {PERSONAL_INFO.firstName[0]}
              </div>
              <span className="text-lg font-bold font-poppins gradient-text">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              {PERSONAL_INFO.tagline}. Available for freelance.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: <FaGithub className="w-4 h-4" />, href: PERSONAL_INFO.githubUrl, label: 'GitHub' },
                { icon: <FaLinkedin className="w-4 h-4" />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl glass"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label={`Visit ${s.label}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold font-poppins mb-4" style={{ color: 'var(--text-primary)' }}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors hover:text-indigo-400 text-left"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold font-poppins mb-4" style={{ color: 'var(--text-primary)' }}>
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block text-sm transition-colors hover:text-indigo-400"
                style={{ color: 'var(--text-secondary)' }}
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {PERSONAL_INFO.location}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-400 font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: 'var(--border-color)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.{' '}
            {/* <FaHeart className="w-3.5 h-3.5 text-red-500 animate-pulse" /> */}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            All rights reserved
          </p>
        </div>
      </div>

      {/* Scroll to top FAB */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white z-40"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
