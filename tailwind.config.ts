import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        qur: {
          1: "#222831",
          2: "#EEE",
        },
      },
    },
    container: {
      padding: "1rem",
      center: true,
    },
  },
  plugins: [],
};
export default config;
