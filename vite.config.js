import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: false,
    host: "0.0.0.0", // Accepte les connexions provenant de toutes les adresses IP
    port: 8100,
  },
});
