import withMt from "@material-tailwind/react/utils/withMT";
import type { Config } from "tailwindcss";

const config: Config = withMt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
        hoverColor: "#444444",
        blackOverlay: "#454545",
      },
    },
  },
  plugins: [],
}) as Config;
export default config;
