@@ -0,0 +1,108 @@
# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features dark/light theme toggle, smooth animations, and a clean, professional design.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Theme**: Automatic theme switching with manual toggle
- **Smooth Animations**: Powered by Framer Motion
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Multi-language Support**: Arabic and English text support

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Forms**: React Hook Form with Yup validation
- **Routing**: React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

## 🚀 Deployment

The project is configured for deployment to various platforms:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: `npm run build` then deploy the `dist` folder
- **GitHub Pages**: `npm run deploy` (configured with gh-pages)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   └── sections/       # Page sections
├── pages/              # Main pages
├── context/            # React context providers
├── data/               # Static data and configurations
├── hooks/              # Custom React hooks
└── assets/             # Images and static assets
```

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.js` to add new projects. Each project should include:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  category: "Frontend", // or "Full Stack"
  technologies: ["React", "Node.js"],
  github: "https://github.com/username/project",
  liveDemo: "https://project-demo.com",
  deployment: "Vercel"
}
```

### Changing Colors/Themes

Modify the Tailwind configuration in `tailwind.config.js` or update the theme context in `src/context/ThemeContext.jsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React and Vite
