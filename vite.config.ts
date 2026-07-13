import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    // E2B proxies the sandbox over an *.e2b.app host on :443. Accept it, and
    // point the HMR websocket at the public port so hot-reload works in-preview.
    allowedHosts: true,
    hmr: { clientPort: 443 },
  },
});
