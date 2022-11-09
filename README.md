# (Yet another) Vue 3 component library

This project is an open source collection of Vue 3 components based on Tailwind CSS.

## Installation

Add the library to your project using the package manager of your choice:

```sh
npm install @lewebsimple/ui
pnpm add @lewebsimple/ui
yarn add @lewebsimple/ui
```

Configure Tailwind with the default preset in `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/@lewebsimple/ui/src/**/*.{js,ts,vue}"],
  presets: [require("@lewebsimple/ui/tailwind-preset")],
  // ...
};
```

## Usage

Install globally as a Vue 3 plugin to register all components:

```ts
import { createApp } from "vue"
import ui from "@lewebsimple/ui";

const app = createApp({});

app.use(ui);
```

Or import components individually:

```ts
import { Alert } from "@lewebsimple/ui";
```
