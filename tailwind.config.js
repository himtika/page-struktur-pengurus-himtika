import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AEE2",
        secondary: "#26C5E6",
        tertiary: "#FDF722",
        white2: '#F4F4F5'
      },
      screens: {
        xs: "425px",
      },
      fontFamily: {
        figtree: ['"Figtree"'],
      },
    },
  },
  plugins: [flowbitePlugin],
};
