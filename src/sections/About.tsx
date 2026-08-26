import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaCoffee } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants/data';
import ScrollReveal from '../components/shared/ScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import { staggerContainer, staggerItem } from '../utils/animations';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  color: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, suffix = '+', label, color }) => {
  const { count, ref } = useCountUp(value);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-6 text-center flex flex-col items-center gap-3 hover-lift"
      style={{ '--card-accent': color } as React.CSSProperties}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
        style={{ background: `linear-gradient(135deg, ${color}33, ${color}66)`, color }}
      >
        {icon}
      </div>
      <div>
        <div className="text-3xl font-bold font-poppins" style={{ color }}>
          {count}{suffix}
        </div>
        <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          {label}
        </div>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const stats = [
    { icon: <FaCode className="w-5 h-5" />, value: PERSONAL_INFO.yearsOfExperience, suffix: '+', label: 'Years Experience', color: '#6366f1' },
    { icon: <FaRocket className="w-5 h-5" />, value: PERSONAL_INFO.projectsCompleted, suffix: '+', label: 'Projects Completed', color: '#8b5cf6' },
    { icon: <FaUsers className="w-5 h-5" />, value: PERSONAL_INFO.clientsSatisfied, suffix: '+', label: 'Happy Clients', color: '#06b6d4' },
    { icon: <FaCoffee className="w-5 h-5" />, value: PERSONAL_INFO.coffeeConsumed, suffix: '+', label: 'Cups of Coffee', color: '#f59e0b' },
  ];

  return (
    <section id="about" className="section-padding" aria-label="About section">
      <div className="section-container">
        {/* Section heading */}
        <ScrollReveal className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            About Me
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Avatar / Image side */}
          <ScrollReveal direction="left">
            <div className="relative flex justify-center lg:justify-start">
              {/* Decorative card */}
              <div className="relative">
                {/* Main avatar box */}
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                  }}
                >
                  <span
                    className="text-8xl font-black font-poppins z-10 relative"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                  >
                    VJ
                  </span>
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 animate-shimmer" />
                </div>

                {/* Experience badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-5 -right-5 glass-card px-5 py-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text font-poppins">
                    {PERSONAL_INFO.yearsOfExperience}+
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    Years Exp.
                  </div>
                </motion.div>

                {/* Tech stack badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -top-5 -left-5 glass-card px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Open to Work
                    </span>
                  </div>
                </motion.div>

                {/* Decorative dots */}
                <div
                  className="absolute -bottom-10 -left-10 w-32 h-32 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-bold font-poppins mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Full Stack Developer based in{' '}
                  <span className="gradient-text">Coimbatore, India</span>
                </h3>
                <div className="space-y-4">
                  {PERSONAL_INFO.about.split('\n\n').map((para, i) => (
                    <p key={i} className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {para.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Name', value: PERSONAL_INFO.name },
                  { label: 'Location', value: PERSONAL_INFO.location },
                  { label: 'Email', value: PERSONAL_INFO.email },
                  { label: 'Status', value: 'Available', highlight: true },
                ].map(item => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--text-muted)' }}>
                      {item.label}
                    </span>
                    <span
                      className={`text-sm font-medium ${item.highlight ? 'text-emerald-400' : ''}`}
                      style={!item.highlight ? { color: 'var(--text-primary)' } : {}}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-2">
                <motion.a
                  href={PERSONAL_INFO.resumeUrl}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  {/* Download Resume */}
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}  
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold glass text-sm -ml-30"
                  style={{ color: 'var(--text-primary)' }}
                >
                  View GitHub
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
