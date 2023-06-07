import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import polyfillNode from "rollup-plugin-polyfill-node";

export default defineConfig({
  plugins: [sveltekit(), polyfillNode()],
});
