import { type Plugin } from "vue";

import UiAlert from "./components/Alert.vue";

export { UiAlert };

export default {
  install: (app) => {
    app.component("UiAlert", UiAlert);
  },
} as Plugin;

declare module "vue" {
  export interface GlobalComponents {
    UiAlert: typeof UiAlert;
  }
}
