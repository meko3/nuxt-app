import { storiesOf } from "@storybook/vue";
import Vue from "vue";

import Home from "./index.vue";

Vue.component("home", Home);

storiesOf("Pages", module)
  .add("Home", () => ({
    comopnents: { Home },
    template: "<home />"
  }));
