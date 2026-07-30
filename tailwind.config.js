/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0f14",
          900: "#111820",
          800: "#1a232d",
          700: "#26323e",
        },
        mist: {
          50: "#f6f8f7",
          100: "#eaefec",
          200: "#d3ddd7",
          400: "#8fa39a",
        },
        brand: {
          400: "#3fd6a3",
          500: "#22b98a",
          600: "#188f6c",
        },
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
