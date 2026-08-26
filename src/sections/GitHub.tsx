import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaUserFriends, FaBook } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { useGitHub } from '../hooks/useGitHub';
import { PERSONAL_INFO } from '../constants/data';
import ScrollReveal from '../components/shared/ScrollReveal';
import { staggerContainer, staggerItem } from '../utils/animations';

// Language color map
const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Python: '#3776AB',
  Java: '#ED8B00',
  'C#': '#239120',
  Vue: '#4FC08D',
  React: '#61DAFB',
};

const GitHubSection: React.FC = () => {
  const { user, repos, languages, totalStars, loading, error } = useGitHub(PERSONAL_INFO.github);

  const langEntries = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const totalLangCount = langEntries.reduce((s, [, v]) => s + v, 0);

  const stats = user
    ? [
        { icon: <FaBook className="w-5 h-5" />, value: user.public_repos, label: 'Repositories', color: '#6366f1' },
        { icon: <FaUsers className="w-5 h-5" />, value: user.followers, label: 'Followers', color: '#8b5cf6' },
        { icon: <FaUserFriends className="w-5 h-5" />, value: user.following, label: 'Following', color: '#06b6d4' },
        { icon: <FaStar className="w-5 h-5" />, value: totalStars, label: 'Total Stars', color: '#f59e0b' },
      ]
    : [];

  return (
    <section id="github" className="section-padding" aria-label="GitHub statistics section">
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            Open Source
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            My open source contributions and development activity
          </p>
        </ScrollReveal>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div
              className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: 'var(--color-primary)', borderTopColor: 'transparent' }}
            />
          </div>
        )}

        {error && (
          <div
            className="text-center py-12 glass-card max-w-md mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            <FaGithub className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>Could not load GitHub data. Rate limit may have been reached.</p>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-primary)' }}
            >
              Visit my GitHub <HiExternalLink />
            </a>
          </div>
        )}

        {user && !loading && (
          <>
            {/* Profile card */}
            <ScrollReveal className="mb-12">
              <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto">
                <img
                  src={user.avatar_url}
                  alt={`${user.name}'s GitHub avatar`}
                  className="w-20 h-20 rounded-full ring-4"
                  style={{ '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties}
                  loading="lazy"
                />
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold font-poppins" style={{ color: 'var(--text-primary)' }}>
                    {user.name || user.login}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>@{user.login}</p>
                  {user.bio && (
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{user.bio}</p>
                  )}
                </div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  <FaGithub /> View Profile
                </a>
              </div>
            </ScrollReveal>

            {/* Stats grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {stats.map(stat => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="glass-card p-5 text-center"
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: `${stat.color}20`, color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold font-poppins" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Language breakdown */}
              <ScrollReveal direction="left" className="lg:col-span-1">
                <div className="glass-card p-6 h-full">
                  <h4 className="font-bold font-poppins mb-5" style={{ color: 'var(--text-primary)' }}>
                    Top Languages
                  </h4>
                  <div className="space-y-3">
                    {langEntries.map(([lang, count]) => {
                      const pct = Math.round((count / totalLangCount) * 100);
                      const color = LANG_COLORS[lang] || '#6366f1';
                      return (
                        <div key={lang}>
                          <div className="flex items-center justify-between mb-1 text-sm">
                            <span className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                              <span style={{ color: 'var(--text-primary)' }}>{lang}</span>
                            </span>
                            <span style={{ color: 'var(--text-muted)' }}>{pct}%</span>
                          </div>
                          <div
                            className="h-1.5 rounded-full overflow-hidden"
                            style={{ background: 'var(--bg-tertiary)' }}
                          >
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* GitHub streak embed */}
                  <div className="mt-6">
                    <img
                      src={`https://github-readme-streak-stats.herokuapp.com/?user=${PERSONAL_INFO.github}&theme=transparent&hide_border=true&stroke=6366f1&ring=6366f1&fire=8b5cf6&currStreakLabel=6366f1`}
                      alt="GitHub streak stats"
                      className="w-full rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Repository cards */}
              <ScrollReveal direction="right" className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  {repos.slice(0, 6).map(repo => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      className="glass-card p-4 flex flex-col gap-3 no-underline"
                    >
                      <div className="flex items-center gap-2">
                        <FaGithub className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                        <span className="text-sm font-semibold truncate" style={{ color: 'var(--color-primary)' }}>
                          {repo.name}
                        </span>
                      </div>
                      {repo.description && (
                        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                          {repo.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 mt-auto text-xs" style={{ color: 'var(--text-muted)' }}>
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ background: LANG_COLORS[repo.language] || '#6366f1' }}
                            />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <FaStar className="w-3 h-3" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCodeBranch className="w-3 h-3" /> {repo.forks_count}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Contribution graph embed */}
            <ScrollReveal className="mt-8">
              <div className="glass-card p-6 overflow-hidden">
                <h4 className="font-bold font-poppins mb-4" style={{ color: 'var(--text-primary)' }}>
                  Contribution Graph
                </h4>
                <img
                  src={`https://ghchart.rshah.org/6366f1/${PERSONAL_INFO.github}`}
                  alt="GitHub contribution graph"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;
