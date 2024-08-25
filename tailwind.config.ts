import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss,sass,less,styl,stylus}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
      },
    },
  },
  plugins: [],
};

export default config;

