/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1128", // Primary dark background
        secondary: "#00FFFF", // Vibrant neon blue
        tertiary: "#E6E6FA",    // Subtle white for text
        link: "#8000FF", // Rich purple for accents
        rare: "#FF4500",    // Bright red for call-to-action
      },
    },
    animation: {
      meteor: "meteor 5s linear infinite",
    },
    keyframes: {
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
        "70%": { opacity: 1 },
        "100%": {
          transform: "rotate(215deg) translateX(-1200px)",
          opacity: 0,
        },
      },
    },
  },
  plugins: [],
}
