/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: '#1a202c', // Couleur sobre primaire
        secondary: '#2d3748', // Couleur sobre secondaire
        accent: '#38b2ac', // Couleur d'accent
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // Police esthétique
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'hover-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
        'hover-scale': 'hover-scale 0.3s ease-out',
      },
      sidebarBg: '#f9f9f9', // Couleur de fond du sidebar
      sidebarHover: '#e0f2ff', // Couleur de survol du sidebar
    },
  },
  plugins: [
    '@tailwindcss/forms', // Pour les styles de formulaire
  ],
}



