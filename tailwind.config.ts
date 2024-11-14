import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryblue: '#A35DDA',
        OneGray: '#291F31',
        TwoGray: '#1B1E23',
        MainWhite: '#EDEDED',
        Cardcolor: '#16181C',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
};
export default config;