import { useState, useEffect } from 'react';
import { githubService } from '../services/githubService';
import type { GitHubStats } from '../types';

const CACHE_KEY = 'github-stats-cache';
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

/**
 * Fetches and caches GitHub user stats, repos, and language breakdown.
 */
export const useGitHub = (username: string) => {
  const [stats, setStats] = useState<GitHubStats>({
    user: null,
    repos: [],
    languages: {},
    totalStars: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!username) return;

    // Try cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          setStats({ ...data, loading: false, error: null });
          return;
        }
      }
    } catch {
      // Ignore cache errors
    }

    const fetchData = async () => {
      try {
        const [user, repos] = await Promise.all([
          githubService.getUser(username),
          githubService.getRepos(username),
        ]);

        // Aggregate languages across repos
        const languages: Record<string, number> = {};
        for (const repo of repos.slice(0, 10)) {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        }

        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

        const data = { user, repos: repos.slice(0, 6), languages, totalStars };

        // Save to cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));

        setStats({ ...data, loading: false, error: null });
      } catch (err) {
        setStats(prev => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to fetch GitHub data',
        }));
      }
    };

    fetchData();
  }, [username]);

  return stats;
};
