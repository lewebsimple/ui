/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{docs,src}/**/*.{js,ts,vue}"],
  presets: [require("./tailwind-preset")],
};
