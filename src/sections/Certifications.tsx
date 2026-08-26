import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiAngular } from 'react-icons/si';
import { CERTIFICATIONS } from '../constants/data';
import ScrollReveal from '../components/shared/ScrollReveal';
import { staggerContainer, staggerItem } from '../utils/animations';

const ICON_MAP: Record<string, React.ReactNode> = {
  SiReact: <SiReact />,
  SiNodedotjs: <SiNodedotjs />,
  SiTypescript: <SiTypescript />,
  SiAngular: <SiAngular />,
};

const Certifications: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-label="Certifications section"
    >
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            Credentials
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Continuous learning is the key to staying ahead
          </p>
        </ScrollReveal>

        {/* Certification Cards (flip on hover/click) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              className="relative cursor-pointer"
              style={{ perspective: '1000px', height: '220px' }}
              onClick={() => setFlipped(flipped === cert.id ? null : cert.id)}
              aria-label={`${cert.title} certification card`}
            >
              <motion.div
                animate={{ rotateY: flipped === cert.id ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center gap-4"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${cert.color}20`, color: cert.color }}
                  >
                    {ICON_MAP[cert.icon] || <FaCertificate />}
                  </div>
                  <div className="text-center">
                    <h3
                      className="text-sm font-bold font-poppins leading-tight"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-xs mt-1" style={{ color: cert.color }}>
                      {cert.date}
                    </p>
                  </div>
                  <div
                    className="absolute top-3 right-3 w-2 h-2 rounded-full animate-pulse"
                    style={{ background: cert.color }}
                  />
                  <p className="text-xs absolute bottom-3" style={{ color: 'var(--text-muted)' }}>
                    Click to flip
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center gap-4"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}11)`,
                    borderColor: `${cert.color}40`,
                  }}
                >
                  <FaCertificate className="w-10 h-10" style={{ color: cert.color }} />
                  <div className="text-center">
                    <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Issued by</p>
                    <p className="text-sm font-semibold text-center" style={{ color: 'var(--text-primary)' }}>
                      {cert.issuer}
                    </p>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white mt-2"
                    style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}aa)` }}
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <FaExternalLinkAlt className="w-3 h-3" /> View Certificate
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
