/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define colors using CSS variables
        base: "var(--color-base)",
        text: "var(--color-text)",
        btn: "var(--color-button)",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}

