import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TESTIMONIALS } from '../constants/data';
import ScrollReveal from '../components/shared/ScrollReveal';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="testimonials" className="section-padding" aria-label="Testimonials section">
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            What People Say
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="glass-card p-8 sm:p-12"
              >
                <FaQuoteLeft className="w-10 h-10 mb-6 opacity-30" style={{ color: 'var(--color-primary)' }} />
                <p className="text-lg sm:text-xl leading-relaxed mb-8 italic" style={{ color: 'var(--text-primary)' }}>
                  "{TESTIMONIALS[current].quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg font-poppins" style={{ color: 'var(--text-primary)' }}>
                      {TESTIMONIALS[current].name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {TESTIMONIALS[current].role} · {TESTIMONIALS[current].company}
                    </p>
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={goPrev}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;