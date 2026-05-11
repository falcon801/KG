import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [path.join(__dirname, "index.html"), path.join(__dirname, "src/**/*.{ts,tsx}")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        canvas: "#0b0a08",
        surface: "#11100d",
        elevated: "#171510",
        card: "#18150f",
        "card-hover": "#211d15",
        line: "#3a3227",
        "line-hover": "#5a4a35",
        mist: "rgba(191, 165, 120, 0.1)",
        accent: {
          DEFAULT: "#bfa578",
          bright: "#f0e4cd",
          muted: "#8d7a5d",
          copper: "#b58b5f",
          pink: "#b87967",
          green: "#8fa36d",
          amber: "#c9a45c",
        },
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(191,165,120,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(191,165,120,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 72px -24px rgba(191, 165, 120, 0.18)",
        "glow-copper": "0 0 56px -18px rgba(181, 139, 95, 0.14)",
        card: "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-hover":
          "0 0 26px rgba(191,165,120,0.07), 0 10px 36px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.055)",
      },
    },
  },
  plugins: [],
};
