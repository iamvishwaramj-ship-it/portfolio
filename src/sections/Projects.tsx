  import React, { useState, useMemo } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
  import { PROJECTS } from '../constants/data';
  import ScrollReveal from '../components/shared/ScrollReveal';
  import { staggerContainer, staggerItem } from '../utils/animations';

  const FILTER_CATEGORIES = ['All', 'React', 'Angular', 'Node.js'];

  const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = useMemo(() => {
      return PROJECTS.filter(project => {
        const matchesFilter = activeFilter === 'All' || project.category.includes(activeFilter);
        const matchesSearch =
          searchQuery === '' ||
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
      });
    }, [activeFilter, searchQuery]);

    return (
      <section
        id="projects"
        className="section-padding"
        style={{ background: 'var(--bg-secondary)' }}
        aria-label="Projects section"
      >
        <div className="section-container">
          {/* Heading */}
          <ScrollReveal className="text-center mb-12">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
            >
              Featured Work
            </span>
            <h2 className="text-section-title font-poppins font-bold">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A showcase of what I've built — from concept to deployment
            </p>
          </ScrollReveal>

          {/* Controls */}
          <ScrollReveal className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {FILTER_CATEGORIES.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: activeFilter === cat ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'var(--card-bg)',
                    color: activeFilter === cat ? 'white' : 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Search bar */}
            <div className="relative w-full sm:w-64">
              <FaSearch className="absolute left-28.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 rounded-xl text-sm outline-none transition-all focus:border-indigo-500"
                style={{
                  background: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              />
            </div>
          </ScrollReveal>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + searchQuery}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                    No projects found matching your criteria.
                  </p>
                </div>
              ) : (
                filteredProjects.map(project => (
                  <motion.article
                    key={project.id}
                    variants={staggerItem}
                    whileHover={{ y: -6 }}
                    className="glass-card rounded-2xl overflow-hidden flex flex-col group"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-800">
                      <div
                        className="absolute inset-0 flex items-center justify-center text-4xl font-bold font-poppins opacity-20"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold font-poppins mb-2" style={{ color: 'var(--text-primary)' }}>
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map(tech => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium"
                              style={{
                                background: `${project.color}15`,
                                color: project.color,
                                border: `1px solid ${project.color}30`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold glass transition-all hover:scale-105"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          <FaGithub className="w-3.5 h-3.5" /> GitHub
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105"
                            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)` }}
                          >
                            <FaExternalLinkAlt className="w-3.5 h-3.5" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  };

  export default Projects;