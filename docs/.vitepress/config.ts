import { resolve } from "path";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "@lewebsimple/ui",
  themeConfig: {
    sidebar: [
      {
        items: [
          { text: "Home", link: "/" },
          { text: "Getting started", link: "/getting-started.md" },
        ],
      },
      {
        text: "Components",
        items: [{ text: "Alert", link: "/components/alert/" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/lewebsimple/ui" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022 Web simple",
    },
  },
  vite: {
    resolve: {
      // alias: {
      //   "@lewebsimple/ui": resolve(__dirname, "../../src"),
      // },
      // dedupe: ["vue"],
    },
  },
});
