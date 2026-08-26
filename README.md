# Premium Developer Portfolio

A modern, high-performance, and visually stunning developer portfolio built with React, TypeScript, and Vite.

## 🚀 Features

- **Premium Design**: Dark/light mode, glassmorphism, floating particles, and smooth gradients.
- **Animations**: Powered by Framer Motion for scroll reveals, hover effects, and page transitions.
- **Dynamic Data**: Live GitHub statistics, repositories, and contribution graphs.
- **Interactive**: Custom cursor, typewriter effect, scroll progress, and animated counters.
- **Contact Form**: Functional email submission via EmailJS with validation and toast notifications.
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: React Icons
- **APIs**: GitHub REST API, EmailJS

## 📦 Project Structure

\`\`\`
src/
├── assets/              # Images, fonts, and resume PDF
├── components/          # Reusable UI elements (Navbar, Cards, Cursor, etc.)
├── sections/            # The 10 main portfolio sections
├── pages/               # Page layouts (Home, 404)
├── hooks/               # Custom React hooks (Theme, GitHub, Typewriter)
├── services/            # API integrations (GitHub, EmailJS)
├── utils/               # Animation variants and helper functions
├── constants/           # Centralized portfolio data (Update this file!)
├── types/               # TypeScript interfaces
└── context/             # React Context providers (Theme)
\`\`\`

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

\`\`\`bash
npm install
\`\`\`

### 2. Configuration

Copy the example environment file and fill in your credentials:

\`\`\`bash
cp .env.example .env
\`\`\`

**EmailJS Setup (for Contact Form):**
1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add an Email Service (e.g., Gmail) to get your \`SERVICE_ID\`
3. Create an Email Template to get your \`TEMPLATE_ID\`
4. Go to Account > API Keys to get your \`PUBLIC_KEY\`
5. Add these to your \`.env\` file.

### 3. Personalization

All your portfolio data is centralized in one file.
Open \`src/constants/data.ts\` and update:
- Personal Information
- Skills
- Experiences
- Projects
- Certifications
- Testimonials

*Note: Don't forget to place your actual resume in the \`public/\` folder as \`resume.pdf\`.*

### 4. Development Server

Start the Vite development server:

\`\`\`bash
npm run dev
\`\`\`

Open \`http://localhost:3000\` in your browser.

## 🚢 Deployment

This project is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Add your Environment Variables (\`VITE_EMAILJS_SERVICE_ID\`, etc.) in the Vercel dashboard.
4. Deploy!

### Build for Production Locally

\`\`\`bash
npm run build
npm run preview
\`\`\`

## 📝 Code Quality

Run linting to check for issues:

\`\`\`bash
npm run lint
\`\`\`

---
*Designed & Built by [Vishwaram J](https://github.com/iamvishwaramj-ship-it)*
