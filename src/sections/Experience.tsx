import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { EXPERIENCES } from '../constants/data';
import ScrollReveal from '../components/shared/ScrollReveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding" aria-label="Experience section">
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            Work History
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            My professional journey and the impact I've made
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-0.5"
            style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6, transparent)' }}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex items-start gap-8 md:gap-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 md:left-1/2 w-9 h-9 rounded-full flex items-center justify-center -translate-x-4 md:-translate-x-4 z-10 flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}88)` }}
                  >
                    <FaBriefcase className="w-4 h-4 text-white" />
                  </div>

                  {/* Card — alternates left/right on desktop */}
                  <ScrollReveal
                    direction={isLeft ? 'left' : 'right'}
                    delay={index * 0.1}
                    className={`ml-14 md:ml-0 w-full md:w-5/12 ${
                      isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4, boxShadow: `0 20px 40px ${exp.color}20` }}
                      className="glass-card p-6"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3
                            className="text-lg font-bold font-poppins"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {exp.position}
                          </h3>
                          <p className="font-semibold text-sm" style={{ color: exp.color }}>
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                          style={{
                            background: `${exp.color}20`,
                            color: exp.color,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <span className="flex items-center gap-1.5">
                          <FaCalendarAlt className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: exp.color }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium"
                            style={{
                              background: `${exp.color}15`,
                              color: exp.color,
                              border: `1px solid ${exp.color}30`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
