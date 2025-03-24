import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },

    extend: {
      animation: {
        progress: "progress 1s infinite linear",
        push: "push 1s cubic-bezier(0, 0, 0.2, 1) forwards",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      borderRadius: {
        "semi-sm": "0.175rem",
      },

      colors: {
        primary: "#18B15E",
        secondary: "#d9d9d9",
        success: "#02d46a",
        error: "#ff3b30",
        info: "#0097EC",
        warning: "#ffe58f",
        default: "#fafafa99",
        "light-ash": "#E9E9E9",
        whitesmoke: "#F5F5F5",
        carrot: "#F8981D",
      },

      fontFamily: {
        sans: ["var(--font-primary)"],
      },

      fontSize: {
        "semi-sm": ["0.815rem", "1.125rem"],
      },

      height: {
        dvh: "100dvh",
      },

      keyframes: {
        progress: {
          "0%": { transform: " translateX(0) scaleX(0)" },
          "40%": { transform: "translateX(0) scaleX(0.4)" },
          "100%": { transform: "translateX(100%) scaleX(0.5)" },
        },

        push: {
          "75%, 100%": {
            transform: "scale(1.3) scaleY(1.4)",
            opacity: "0",
          },
        },
      },

      maxHeight: {
        dvh: "100dvh",
      },

      minHeight: {
        dvh: "100dvh",
      },

      transformOrigin: {
        "left-right": "0% 50%",
      },

      transitionProperty: {
        height: "height",
        visibility: "visibility",
      },

      zIndex: {
        100: "100",
      },
    },
  },

  plugins: [],
} satisfies Config;
