import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants/data';

const NotFound: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="text-center px-6">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="font-poppins font-black leading-none mb-6"
          style={{
            fontSize: 'clamp(5rem, 20vw, 12rem)',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1
            className="text-2xl sm:text-3xl font-bold font-poppins mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Page Not Found
          </h1>
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="px-6 py-3 rounded-xl font-semibold text-white inline-block"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                Go Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3 rounded-xl font-semibold glass inline-block"
                style={{ color: 'var(--text-primary)' }}
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
