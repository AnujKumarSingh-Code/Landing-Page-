/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(127deg, rgba(219, 39, 119, 0.12) -67.19%, rgba(249, 115, 22, 0.12) 203.32%)',
        'linear-primary-500':
          'linear-gradient(127deg, #DB2777 -67.19%, #F97316 203.32%)',
      },
      fontFamily: {
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'move-up-down': 'moveUpDown 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
