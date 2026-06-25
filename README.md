# Surinder Kumar — Portfolio Website

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)](https://surinder-web-dev.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev)

A modern, responsive personal portfolio website built with **React 19**, **Vite 7**, and **Framer Motion**. Features a dark theme with glassmorphism design, particle background, and smooth scroll animations.

## 🌐 Live Demo

**[surinder-web-dev.vercel.app](https://surinder-web-dev.vercel.app/)**

## ✨ Features

- 🎨 **Dark Theme** with glassmorphism UI and gradient accents
- ⚡ **Fast Performance** — built with Vite 7 for lightning-fast HMR and builds
- 🎞 **Smooth Animations** — Framer Motion powered scroll-triggered reveals
- 🌊 **Particle Background** — interactive canvas particle system
- 📱 **Fully Responsive** — optimized for mobile, tablet, and desktop
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- 🔍 **SEO Optimized** — Open Graph tags, JSON-LD structured data, meta tags
- 🚀 **Google Search Console Ready** — verification meta tag included

## 🛠 Tech Stack

| Frontend | Build Tool | Animations | Icons | SEO |
|----------|-----------|------------|-------|-----|
| React 19 | Vite 7 | Framer Motion | Lucide React | JSON-LD, OG Tags |
| CSS3 (Custom Properties) | ESLint | React Scroll | — | GSC Verified |

## 📁 Project Structure

```
src/
├── App.jsx                   # Root component with loading screen
├── main.jsx                  # Entry point
├── index.css                 # Global styles (1300+ lines)
└── components/
    ├── Navbar.jsx            # Sticky nav with scroll spy + mobile menu
    ├── Hero.jsx              # Animated hero with avatar & floating badges
    ├── About.jsx             # About section with info + skill cards
    ├── Experience.jsx        # Education & training timeline
    ├── Skills.jsx            # Categorized skills grid (Frontend, Backend, etc.)
    ├── Projects.jsx          # Featured project cards with live demos
    ├── Certificates.jsx      # Certification badges
    ├── Contact.jsx           # Contact form + social links
    ├── Footer.jsx            # Footer navigation
    ├── LoadingScreen.jsx     # Animated name reveal + progress bar
    └── ParticlesBg.jsx       # Canvas particle background
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📬 Contact

- **Email:** surinder2003k@gmail.com
- **GitHub:** [surinder2003k](https://github.com/surinder2003k)
- **LinkedIn:** [surinder-web-dev](https://linkedin.com/in/surinder-web-dev)

## 📄 License

MIT