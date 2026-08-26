import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaInfoCircle, FaArrowRight } from 'react-icons/fa';
import ScrollReveal from '../components/shared/ScrollReveal';
import { PRICING_PACKAGES } from '../constants/data';
import { staggerContainer, staggerItem } from '../utils/animations';

const Pricing: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section-padding" aria-label="Pricing section">
      <div className="section-container">
        {/* Section Heading */}
        <ScrollReveal className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            Transparent Estimates
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            Project <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            Simple, honest pricing to help you plan your budget with confidence.
          </p>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {PRICING_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass-card p-6 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular ? 'border-2 border-indigo-500 shadow-lg shadow-indigo-500/10' : ''
              }`}
            >
              {pkg.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  Most Popular
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-sm font-bold tracking-wider uppercase mb-2 font-poppins" style={{ color: pkg.color }}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs uppercase tracking-wide font-medium" style={{ color: 'var(--text-muted)' }}>
                      {pkg.price.startsWith('₹') ? 'Starting from' : ''}
                    </span>
                    <span className="text-2xl font-bold font-poppins" style={{ color: 'var(--text-primary)' }}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {pkg.description}
                </p>

                <div className="h-px w-full mb-6" style={{ background: 'var(--border-color)' }} />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      <FaCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: pkg.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <motion.button
                onClick={handleCtaClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-md"
                style={{
                  background: pkg.popular
                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                    : 'linear-gradient(135deg, #374151, #1f2937)',
                }}
              >
                {pkg.cta} <FaArrowRight className="w-3 h-3" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Note */}
        <ScrollReveal className="mt-12">
          <div
            className="max-w-2xl mx-auto p-4 rounded-xl flex items-start gap-3 text-xs"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
          >
            <FaInfoCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
            <p style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Important Note:</strong> Prices are starting estimates. Final pricing depends on project scope, custom features, and specific requirements. Revisions are structured per project agreement.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
