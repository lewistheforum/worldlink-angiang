import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layout/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        palette: {
          1: "var(--color-palette-1)",
          2: "var(--color-palette-2)",
          3: "var(--color-palette-3)",
          4: "var(--color-palette-4)",
          5: "var(--color-palette-5)",
          6: "var(--color-palette-6)",
        }
      },
      screen: {
        md: "790px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
} satisfies Config;
