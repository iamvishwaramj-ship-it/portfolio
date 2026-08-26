import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUserTie, FaRocket, FaTools, FaCode, FaCheck, FaArrowRight } from 'react-icons/fa';
import ScrollReveal from '../components/shared/ScrollReveal';
import { SERVICES } from '../constants/data';
import { staggerContainer, staggerItem } from '../utils/animations';

const ICON_MAP: Record<string, React.ReactNode> = {
  FaGlobe: <FaGlobe className="w-5 h-5" />,
  FaUserTie: <FaUserTie className="w-5 h-5" />,
  FaRocket: <FaRocket className="w-5 h-5" />,
  FaTools: <FaTools className="w-5 h-5" />,
  FaCode: <FaCode className="w-5 h-5" />,
};

const Services: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding" aria-label="Services section">
      <div className="section-container">
        {/* Section Heading */}
        <ScrollReveal className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            What I Offer
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            Freelance <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            High-quality, modern web development services designed to help small businesses, startups, and professionals succeed online.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}aa)` }}
                  >
                    {ICON_MAP[service.icon]}
                  </div>
                  <h3 className="text-lg font-bold font-poppins" style={{ color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>

                {/* Key Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      <FaCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <motion.button
                onClick={handleCtaClick}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider py-2 transition-colors hover:underline no-underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Discuss Your Project <FaArrowRight className="w-3 h-3" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
