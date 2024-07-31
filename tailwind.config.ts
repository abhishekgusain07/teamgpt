import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      alignItems: {
        'normal': 'normal',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: '0' }
        },
        dash: {
          '0%': { strokeDasharray: '0 1500' },
          '100%': { strokeDasharray: '1500 1500' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        dash: 'dash 1.2s linear forwards',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
        draw: 'draw 1.5s ease forwards'
      },
    },
  },
  plugins: [],
};
export default config;
