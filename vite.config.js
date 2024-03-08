import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "https://qonaqol.onrender.com/qonaqol/api/event/create-event":
        "http://localhost:5173",
    },
  },
  plugins: [react()],
});
