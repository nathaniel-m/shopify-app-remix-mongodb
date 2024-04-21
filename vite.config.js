import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

installGlobals();

export default defineConfig({
  plugins: [remix(),netlifyPlugin(),],
});
