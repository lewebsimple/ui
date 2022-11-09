import { App } from "vue";
import * as components from "./components";

export default {
  install: (app: App) => {
    for (const [key, component] of Object.entries(components)) {
      app.component(key, component);
    }
  },
};

export * from "./components";
