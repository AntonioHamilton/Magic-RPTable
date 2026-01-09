/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#060e26",
          secondary: "#151740",
          tertiary: "#1a1f3a",
          elevated: "#252b47",
        },
        text: {
          primary: "#e8e8ec",
          secondary: "#d2d2d4",
          tertiary: "rgba(144, 152, 175, 0.9)",
          highlighted: "#c6c6c6",
        },
        blue: {
          300: "#6561d9",
          400: "#4d49c7",
          500: "#3a37a6",
          600: "#2d2a8a",
        },
        purple: {
          300: "#7252a6",
          400: "#5a3d99",
          500: "#432d73",
          600: "#34235a",
        },
        magenta: {
          300: "#d44784",
          400: "#b8326f",
          500: "#8c2756",
          600: "#6f1e43",
        },
        gold: {
          300: "#f5d674",
          400: "#f2c94c",
          500: "#e6a209",
          600: "#cc8f08",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(58, 55, 166, 0.5)",
        "glow-purple": "0 0 20px rgba(67, 45, 115, 0.5)",
        "glow-gold": "0 0 20px rgba(242, 201, 76, 0.4)",
      },
    },
  },
  plugins: [],
};
