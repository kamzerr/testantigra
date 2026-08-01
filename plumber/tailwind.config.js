/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#040404',
          card: '#090a0d',
          surface: '#111319',
          border: 'rgba(255, 255, 255, 0.08)',
          copper: '#e57c35',
          'copper-glow': '#ff944d',
          blue: '#0050FF',
          cyan: '#00D6FF',
          accent: '#0066FF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-copper': '0 0 25px rgba(229, 124, 53, 0.25)',
        'glow-blue': '0 0 30px rgba(0, 80, 255, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 214, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
