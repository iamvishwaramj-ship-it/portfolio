import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiAngular, SiHtml5, SiJavascript, SiTypescript,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMysql,
  SiGit, SiGithub, SiPostman, SiVite, SiNpm,
} from 'react-icons/si';
import { FaCss3Alt, FaDatabase, FaCode } from 'react-icons/fa';
import { SKILLS } from '../constants/data';
import ScrollReveal from '../components/shared/ScrollReveal';
import { staggerContainer, staggerItem } from '../utils/animations';

// Icon map for dynamic rendering
const ICON_MAP: Record<string, React.ReactNode> = {
  SiReact: <SiReact />,
  SiAngular: <SiAngular />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <FaCss3Alt />,
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiTailwindcss: <SiTailwindcss />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiMicrosoftsqlserver: <FaDatabase />,
  SiMysql: <SiMysql />,
  SiGit: <SiGit />,
  SiGithub: <SiGithub />,
  SiVisualstudiocode: <FaCode />,
  SiPostman: <SiPostman />,
  SiVite: <SiVite />,
  SiNpm: <SiNpm />,
};

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? Object.entries(SKILLS).flatMap(([cat, skills]) =>
        skills.map(s => ({ ...s, category: cat }))
      )
    : SKILLS[activeCategory as keyof typeof SKILLS]?.map(s => ({ ...s, category: activeCategory })) ?? [];

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-label="Skills section"
    >
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            Technical Skills
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Technologies I work with to bring ideas to life
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                  : 'var(--card-bg)',
                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--border-color)'}`,
              }}
            >
              {cat}
            </motion.button>
          ))}
        </ScrollReveal>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px ${skill.color}30`,
                  borderColor: skill.color + '60',
                }}
                className="glass-card p-5 flex flex-col items-center gap-3 cursor-default group"
              >
                {/* Icon */}
                <motion.div
                  className="text-3xl transition-transform duration-200 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {ICON_MAP[skill.icon] || <SiReact style={{ color: skill.color }} />}
                </motion.div>

                {/* Name */}
                <span
                  className="text-sm font-semibold text-center"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {skill.name}
                </span>

                {/* Progress bar */}
                {/* <div
                  className="w-full h-1.5 rounded-full overflow-hidden"
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                  />
                </div> */}

                {/* Level */}
                <span className="text-xs font-medium" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>  
      </div>
    </section>
  );
};

export default Skills;
