/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const { defineConfig } = require("vue-docgen-cli");

module.exports = defineConfig({
  componentsRoot: "src/components",
  components: "**/*.vue",
  outDir: "docs/components",
  getDestFile: (file, config) => join(config.outDir, file.toLowerCase().replace(/\.vue$/, ""), "index.md"),
});
