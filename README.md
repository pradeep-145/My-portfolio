# 🚀 Pradeep Sakthi - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

> A stunning, modern portfolio website featuring cutting-edge animations, responsive design, and outstanding user experience.

## ✨ Features

### 🎨 **Outstanding Design & Animations**

- **Spectacular 3D Effects**: Interactive cards with depth and perspective
- **Giggly Hover Animations**: Playful micro-interactions that delight users
- **Particle Systems**: Dynamic floating particles and magical effects
- **Smooth Transitions**: Buttery-smooth animations using Framer Motion
- **Glassmorphism UI**: Modern frosted glass aesthetic with backdrop blur

### 🌓 **Advanced Dark/Light Mode**

- Seamless theme switching with animated transitions
- System preference detection
- Persistent theme selection with localStorage
- Custom color schemes for optimal contrast

### 📱 **Responsive Excellence**

- Mobile-first design approach
- Adaptive layouts for all screen sizes
- Touch-optimized interactions
- Progressive Web App capabilities

### 🚀 **Performance Optimized**

- **Lazy Loading**: Smart image loading with fallbacks
- **Code Splitting**: Optimized bundle sizes
- **Next.js 14**: Latest framework with App Router
- **WebP/AVIF Support**: Modern image formats
- **Core Web Vitals**: Excellent performance metrics

### 📧 **Contact Integration**

- Functional contact form with validation
- Email integration using Nodemailer
- WhatsApp direct messaging
- Toast notifications for user feedback

## 🛠️ Tech Stack

### **Frontend**

```json
{
  "framework": "Next.js 14",
  "ui": "React 18",
  "styling": "Tailwind CSS 3.4",
  "animations": "Framer Motion 11.3",
  "icons": "React Icons 5.2",
  "carousel": "React Slick 0.30"
}
```

### **Backend**

```json
{
  "runtime": "Node.js",
  "email": "Nodemailer 6.9",
  "api": "Next.js API Routes"
}
```

### **Development**

```json
{
  "package_manager": "npm",
  "deployment": "Vercel",
  "version_control": "Git"
}
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 8+

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/pradeep-145/My-portfolio.git
cd portfolio-1
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**
   Create a `.env` file in the root directory:

```env
EMAIL=your-email@gmail.com
PASSWORD=your-app-password
```

4. **Start development server**

```bash
npm run dev
```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio-1/
├── 📂 app/                    # Next.js App Router
│   ├── 📄 layout.jsx         # Root layout with theme provider
│   ├── 📄 page.jsx           # Main page component
│   └── 📂 api/               # API routes
├── 📂 components/            # Reusable components
│   ├── 📄 LazyImage.jsx      # Optimized image component
│   ├── 📄 ImageWithFallback.jsx
│   └── 📄 Skills.jsx         # Outstanding skills showcase
├── 📂 pages/                 # Page components
│   ├── 📄 Introduction.jsx   # Hero section
│   ├── 📄 AboutMe.jsx        # About section
│   ├── 📄 Projects.jsx       # Projects showcase
│   ├── 📄 Skills.jsx         # Skills grid
│   ├── 📄 Education.jsx      # Education timeline
│   ├── 📄 Achievements.jsx   # Achievements carousel
│   ├── 📄 Contact.jsx        # Contact form
│   └── 📄 Nav.jsx           # Navigation
├── 📂 constants/             # Data constants
├── 📂 utils/                 # Utility functions
├── 📂 hooks/                 # Custom React hooks
├── 📂 public/                # Static assets
│   └── 📂 images/           # Images and icons
├── 📂 styles/                # Global styles
└── 📄 tailwind.config.js     # Tailwind configuration
```

## 🎯 Key Sections

### 🏠 **Introduction**

- Animated hero section with floating profile image
- Social media links with hover effects
- Call-to-action button with ripple animation

### 👨‍💻 **About Me**

- Personal story with glassmorphism card
- Interactive image with glow effects
- Responsive layout with smooth transitions

### 🎓 **Education**

- Animated timeline for desktop
- Mobile-optimized vertical layout
- Progress bars with percentage indicators
- Achievement stars based on performance

### 💼 **Skills**

- 3D interactive skill cards
- Particle effects on hover
- Progress bars with shimmer effects
- Technology icons with gradients

### 🚀 **Projects**

- Alternating layout for visual appeal
- Live demo and GitHub integration
- Technology stack badges
- Lazy loading for optimal performance

### 🏆 **Achievements**

- Carousel with custom navigation
- Gradient borders and animations
- Achievement cards with trophy icons

### 📞 **Contact**

- Functional contact form
- Email and WhatsApp integration
- Form validation with error handling
- Success animations

## 🎨 Animation Highlights

### **Micro-Interactions**

- Hover effects with 3D transforms
- Button ripples and state changes
- Loading spinners and progress indicators

### **Page Transitions**

- Staggered element animations
- Scroll-triggered reveals
- Smooth section transitions

### **Visual Effects**

- Floating particles
- Gradient animations
- Glassmorphism effects
- Dynamic backgrounds

## 📧 Contact Form Setup

1. **Gmail Setup**

   - Enable 2-factor authentication
   - Generate app-specific password
   - Add credentials to `.env` file

2. **Environment Variables**

```env
EMAIL=your-gmail@gmail.com
PASSWORD=your-16-digit-app-password
```

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
npm i -g vercel
vercel --prod
```

### **Manual Deployment**

```bash
npm run build
npm run start
```

## 🔧 Customization

### **Colors & Themes**

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
}
```

### **Animations**

Modify animations in component files using Framer Motion:

```javascript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

### **Content**

Update personal information in `constants/index.js`:

```javascript
export const skills = [
  { name: "React", level: 90 },
  // Add your skills
];
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for incredible animations
- **Tailwind CSS** for utility-first styling
- **Next.js** for the amazing React framework
- **Vercel** for seamless deployment
- **React Icons** for beautiful icons

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **Mobile Performance**: Optimized for all devices
- **Accessibility**: WCAG 2.1 compliant

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=pradeep-145/My-portfolio&type=Date)](https://star-history.com/#pradeep-145/My-portfolio&Date)

---

<div align="center">
  <p>
    <strong>Made with ❤️ by Pradeep Sakthi</strong>
  </p>
  <p>
    <a href="https://github.com/pradeep-145">GitHub</a> •
    <a href="https://linkedin.com/in/pradeep-sakthi-sridharan-2364ba256">LinkedIn</a> •
    <a href="mailto:spradeepsakthi2004@gmail.com">Email</a>
  </p>
</div>
