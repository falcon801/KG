import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rawBase = process.env.VITE_BASE ?? "/";
const base = rawBase.startsWith("/") ? (rawBase.endsWith("/") ? rawBase : `${rawBase}/`) : `/${rawBase.endsWith("/") ? rawBase.slice(1) : rawBase}/`;

export default defineConfig({
  base,
  plugins: [react()],
});
