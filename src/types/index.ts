// ─── TypeScript Interfaces for the Portfolio ─────────────────────

export interface Skill {
  name: string;
  icon: string;
  color: string;
  level: number;
}

export interface SkillCategory {
  [category: string]: Skill[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  github: string;
  live: string;
  featured: boolean;
  color: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  color: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  color: string;
}

// ─── GitHub API Types ─────────────────────────────────────────────

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
  location: string;
  blog: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface GitHubLanguages {
  [language: string]: number;
}

export interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  languages: GitHubLanguages;
  totalStars: number;
  loading: boolean;
  error: string | null;
}

// ─── Theme ────────────────────────────────────────────────────────
export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

// ─── Animation Variants ───────────────────────────────────────────
export interface AnimationVariant {
  hidden: object;
  visible: object;
}

// ─── Services & Pricing ──────────────────────────────────────────
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period?: string;
  popular?: boolean;
  description: string;
  features: string[];
  cta: string;
  color: string;
}

// ─── Contact Form ─────────────────────────────────────────────────
export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

