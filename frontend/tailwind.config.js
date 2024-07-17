/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00314B",
        secondary: "#D0DF44",
        tertiary: "#F3F4F8",
        quaternary: "#04B7F1",
        // quinary: "#7e22ce",
        quinary: "#0093dd",
        "sky-blue": "#B3B5BD",
        light: "#eaedf7",
        dark: "#0e0e23",
        "secondary-text": "#54647c",
        "pink-blue": "#6259ca",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0093dd",
          secondary: "#f000b8",
          accent: "#69327c",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#06b6d4",
          success: "#16a34a",
          warning: "#fbbd23",
          error: "#be123c",
        },
      },
    ],
    logs: true,
  },
};
