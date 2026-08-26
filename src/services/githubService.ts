import axios from 'axios';
import type { GitHubUser, GitHubRepo } from '../types';

const BASE_URL = 'https://api.github.com';

// Optionally set VITE_GITHUB_TOKEN in .env for higher rate limits (5000 req/hr)
const headers = import.meta.env.VITE_GITHUB_TOKEN
  ? { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` }
  : {};

export const githubService = {
  getUser: async (username: string): Promise<GitHubUser> => {
    const { data } = await axios.get<GitHubUser>(`${BASE_URL}/users/${username}`, { headers });
    return data;
  },

  getRepos: async (username: string): Promise<GitHubRepo[]> => {
    const { data } = await axios.get<GitHubRepo[]>(
      `${BASE_URL}/users/${username}/repos?sort=updated&per_page=30`,
      { headers }
    );
    // Filter out forks and sort by stars
    return data
      .filter((r: GitHubRepo) => !r.fork)
      .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count);
  },
};
