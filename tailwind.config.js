const myThemes = {
  light: {
    primary: "hsl(180, 15%, 60%)",
    secondary: "hsl(21, 54%, 83%)",
    error: "hsl(4, 87%, 74%)",
    accent: "hsl(93, 27%, 73%)",
    neutral: "hsl(38, 31%, 91%)",
    info: "hsl(163, 40%, 79%)",
    success: "hsl(93, 27%, 73%)",
    warning: "hsl(40, 76%, 73%)",
    "primary-content": "hsl(0, 0%, 0%)",
    "error-content": "hsl(0, 0%, 0%)",
    "base-300": "hsl(180, 10%, 88%)",
    "base-200": "hsl(180, 10%, 92%)",
    "base-100": "hsl(180, 10%, 95%)",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    logs: false,
    themes: [myThemes],
  },
};
