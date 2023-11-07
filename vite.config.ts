// vite.config.ts
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
// import highlight from "rehype-highlight";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
      // serverModuleFormat: "cjs",
      appDirectory: "app",
      assetsBuildDirectory: "public/build",
      publicPath: "/build/",
      serverBuildPath: "build/index.js",
    }),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    tsconfigPaths(),
  ],
});
