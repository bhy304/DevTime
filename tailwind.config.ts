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
<<<<<<< Updated upstream
=======
/*
theme.ts	Tailwind 기본값	사용 예시
2px	0.5 = 2px	p-0.5, m-0.5, gap-0.5
4px	1 = 4px	p-1, m-1, gap-1
8px	2 = 8px	p-2, m-2, gap-2
12px	3 = 12px	p-3, m-3, gap-3
16px	4 = 16px	p-4, m-4, gap-4
20px	5 = 20px	p-5, m-5, gap-5
24px	6 = 24px	p-6, m-6, gap-6
32px	8 = 32px	p-8, m-8, gap-8
40px	10 = 40px	p-10, m-10, gap-10
48px	12 = 48px	p-12, m-12, gap-12
56px	14 = 56px	p-14, m-14, gap-14
64px	16 = 64px	p-16, m-16, gap-16
72px	18 = 72px	p-18, m-18, gap-18
*/
>>>>>>> Stashed changes
