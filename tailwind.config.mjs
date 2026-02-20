/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3F61A6",
          mid: "#3F61A6",
          dark: "#252d70",
          light: "#D5E7F2",
          teal: "#8AB5BF",
          cream: "#F2E5BD",
        },
      },
    },
  },
  plugins: [],
};
