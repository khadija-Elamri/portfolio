// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Project status colors
        'project-active': '#10b981',
        'project-development': '#f59e0b',
        'project-maintenance': '#3b82f6',
        
        // Technology category colors
        'frontend': '#8b5cf6',
        'backend': '#0ea5e9',
        'database': '#059669',
        'devops': '#f97316',
        'ai-ml': '#ec4899'
      },
      animation: {
        'project-card-hover': 'float 3s ease-in-out infinite',
        'tech-badge': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}