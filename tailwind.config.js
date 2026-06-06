/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F3",
        pearl: "#FAF8F3",
        sage: "#5F4524",
        olive: "#5F4524",
        champagne: "#5F4524",
        ink: "#5F4524",
        cocoa: "#5F4524",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', '"Playfair Display"', "serif"],
        display: ['"Playfair Display"', '"Cormorant Garamond"', "serif"],
        body: ["Inter", '"DM Sans"', "sans-serif"],
        arabic: ['"Noto Naskh Arabic"', "serif"],
      },
      boxShadow: {
        luxury: "0 26px 80px rgba(99, 91, 75, 0.18)",
        gold: "0 18px 42px rgba(95, 69, 36, 0.22)",
        paper: "0 12px 36px rgba(95, 69, 36, 0.12)",
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 20% 15%, rgba(255,255,255,.78), transparent 28%), radial-gradient(circle at 80% 0%, rgba(183,194,165,.2), transparent 30%), linear-gradient(135deg, #FAF8F3 0%, #F5F5F2 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -14px, 0) rotate(1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(149, 108, 50, 0)" },
          "50%": { boxShadow: "0 0 32px rgba(149, 108, 50, 0.28)" },
        },
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
