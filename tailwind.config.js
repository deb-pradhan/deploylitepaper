/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#F9F9F9', // Off-white paper background
          card: '#FFFFFF', // White card background
          text: '#1A1A1A', // Near black text
          muted: '#666666', // Muted text
          border: '#E5E5E5', // Light border
          accent: '#2D3436', // Dark accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1A1A1A',
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [],
}
