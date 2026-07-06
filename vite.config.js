import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Automatically uses '/technova/' when deploying, and '/' when running locally
  base: command === "build" ? "/technova/" : "/",
}));
