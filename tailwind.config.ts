/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#4C79FF",
          light: "#78B0FF",
        },
        secondary: {
          indigo: "#023E99",
          informative: "#2563EB",
          negative: "#DC2626",
          notice: "#FBBF24",
          positive: "#22C55E",
          fuchsia: "#FD28EC",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F0F2F5",
          200: "#E5E7EB",
          300: "#CCD0D6",
          400: "#969DA8",
          500: "#717887",
          600: "#4B5563",
          700: "#394252",
          800: "#1F2937",
        },
        state: {
          disabled: "#969DA8",
        },
      },
      fontSize: {
        heading: ["1.5rem", { lineHeight: "30px" }],
        title: ["1.25rem", { lineHeight: "24px" }],
        subtitle: ["1.125rem", { lineHeight: "22px" }],
        body: ["1rem", { lineHeight: "20px" }],
        bodysmall: ["0.875rem", { lineHeight: "18px" }],
        caption: ["0.75rem", { lineHeight: "16px" }],
        label: ["0.5rem", { lineHeight: "12px" }],
      },
    },
  },
  plugins: [],
};
