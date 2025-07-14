# 🚀 Startup - Modern SaaS & Business Website Template

![Startup Banner](https://github.com/user-attachments/assets/0cc6a396-98d1-4d49-b769-4ddf25a67b68)

> Free and open-source Next.js template for startups and SaaS businesses featuring modern design, interactive components, and comprehensive business pages.

**🌐 Live Demo**: [https://startup-website-nextjs.vercel.app/](https://startup-website-nextjs.vercel.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)

## Overview

Startup is a comprehensive Next.js template designed specifically for startups and SaaS businesses. The application includes a complete landing page, blog system with pagination, pricing pages, policy pages, and all essential business components needed to launch a professional website.

## Features

### Core Functionality
- 🏠 **Landing Page** - Hero section with clear value proposition and call-to-actions
- 📝 **Blog System** - Full blog with pagination, search, and category filtering
- 💰 **Pricing Pages** - Flexible pricing tables and subscription plans
- 👥 **About & Team** - Company information and team showcases
- 📞 **Contact Forms** - Lead generation with form validation and submissions
- ❓ **Policy Pages** - Terms, Privacy, and Refund policy pages
- 🎥 **Video Sections** - Interactive video presentations with modal popups

### Technical Features
- ⚡ **Dynamic Routing** - SEO-optimized blog pages (`/blog/details/[id]`)
- 🎨 **Interactive Components** - Custom UI components with hover effects and animations
- 🔍 **SEO Optimization** - Meta tags and semantic HTML structure
- 📊 **Data Management** - Centralized data layer with TypeScript interfaces
- 🎯 **Form Handling** - Contact forms with client-side validation and state management

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React 18 with Hooks
- **Themes**: Dark/Light mode with CSS custom properties
- **Icons**: Custom SVG components
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdelrahman-abdelmoaty/Startup.git
   cd Startup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── blog/              # Blog pages with pagination
│   │   ├── details/[id]/  # Dynamic blog post pages
│   │   └── sidebar/       # Blog with sidebar and filters
│   ├── pricing/           # Pricing page
│   ├── terms/             # Terms and conditions
│   ├── privacy/           # Privacy policy
│   ├── refund/            # Refund policy
│   ├── forgot-password/   # Password recovery
│   ├── layout.tsx         # Root layout with theme
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles and themes
│
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI elements
│   ├── Navbar/           # Navigation with mobile menu
│   ├── Footer/           # Footer with sitemap
│   ├── Hero/             # Landing page hero
│   ├── Features/         # Feature showcases
│   ├── Blogs/            # Blog components and data
│   ├── Testimonials/     # Customer testimonials
│   ├── Pricing/          # Pricing tables
│   ├── Video/            # Video sections
│   ├── Partners/         # Partner logos
│   ├── SaaS_1/           # SaaS feature sections
│   ├── SaaS_2/           # Additional SaaS components
│   ├── CTA/              # Call-to-action sections
│   └── SVGs/             # Icon components
│
├── theme/                # Theme configuration
│   └── Theme.tsx         # Dark/Light theme provider
│
├── utils/                # Utility functions
│   └── types.ts          # TypeScript type definitions
│
└── public/               # Static assets
    └── images/           # Optimized images
```

## Development

### Key Development Patterns

- **Component Architecture**: Modular design with reusable components
- **TypeScript**: Strict typing for better development experience
- **Dynamic Routing**: Next.js App Router with dynamic parameters
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: React hooks for component state

### Code Quality

- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Strict type checking enabled
- **Component Organization**: Clear separation of concerns
- **Modern Practices**: React 18 features and Next.js 13+ App Router

## License

This project is created for portfolio demonstration purposes. All code implemented by Abdelrahman Abdelmoaty.

---

*Built with passion by **Abdelrahman Abdelmoaty***