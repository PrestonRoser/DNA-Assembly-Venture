/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f3f8ff",
          100: "#e6f0ff",
          200: "#caddff",
          300: "#9fc0ff",
          400: "#6a9bff",
          500: "#3b7cff",
          600: "#265fe6",
          700: "#1f4bb8",
          800: "#1d3f95",
          900: "#1a3273",
        },
        accent: {
          100: "#fff7e6",
          400: "#ffd48a",
          600: "#f59f00",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        card: "0 10px 30px rgba(2,6,23,0.06)",
        ring: "0 0 0 4px rgba(59,124,255,0.15)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

