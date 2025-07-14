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

Startup is a comprehensive Next.js template designed specifically for startups and SaaS businesses. It provides all the essential pages, components, and sections needed to launch a complete business website with modern design principles and optimized performance.

## Features

### Core Functionality

- 🏠 **Landing Page** - Hero section with clear value proposition
- 📝 **Blog System** - Full blog with pagination, search, and categorization
- 💰 **Pricing Pages** - Flexible pricing tables and plans
- 👥 **Team & About** - Company information and team showcases
- 📞 **Contact Forms** - Multiple contact options with form validation
- ❓ **Policy Pages** - Terms, Privacy, and Refund policies
- 🎥 **Video Sections** - Interactive video presentations

### Technical Features

- ⚡ **Dynamic Routing** - SEO-optimized page routing
- 🎨 **Interactive Components** - Custom UI components with animations
- 🌓 **Dark/Light Themes** - Dual theme support with smooth transitions
- 📱 **Responsive Design** - Mobile-first approach for all devices
- 🔍 **SEO Optimization** - Meta tags and semantic HTML structure
- 📊 **Performance Optimized** - Fast load times and modern optimization

### Business Pages

- 🏢 **Company Pages** - About, Team, Services
- 📈 **SaaS Features** - Feature showcases and comparisons
- 💼 **Business Sections** - Testimonials, Partners, Statistics
- 📧 **Lead Generation** - Newsletter signup and contact forms

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React 18 with Modern Hooks
- **Icons**: Custom SVG components
- **Deployment**: Vercel
- **Performance**: Optimized images and lazy loading

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/abdelrahman-abdelmoaty/Startup.git
   cd Startup
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
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
│   │   ├── details/       # Individual blog post
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
│   │   ├── Heading.tsx   # Typography components
│   │   ├── Paragraph.tsx # Text components
│   │   └── ContainedLink.tsx # Link components
│   ├── Navbar/           # Navigation with mobile menu
│   ├── Footer/           # Footer with sitemap
│   ├── Hero/             # Landing page hero
│   ├── Features/         # Feature showcases
│   ├── Blogs/            # Blog components
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
- **Theme System**: CSS custom properties for seamless theme switching
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Optimized images and component lazy loading

### Customization

- **Themes**: Modify `src/app/globals.css` for custom color schemes
- **Components**: All components in `src/components/` are fully customizable
- **Content**: Update data files in component directories
- **Styling**: Tailwind CSS classes for rapid customization

### Code Quality

- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Strict type checking enabled
- **Component Organization**: Clear separation of concerns
- **Modern Practices**: React 18 features and Next.js 13+ App Router

## Screenshots

![Mobile View](https://github.com/user-attachments/assets/a01e56d1-c4c6-4ac4-b099-1060b5fdb51f)
![Desktop View](https://github.com/user-attachments/assets/cf78a453-6a7e-45b6-af86-c977d0c90b15)

## License

This project is created for portfolio demonstration purposes. All code implemented by Abdelrahman Abdelmoaty.

---

\*Built with passion by **Abdelrahman Abdelmoaty\***
