import { storiesOf } from "@storybook/vue";
import Vue from "vue";

import About from "./index.vue";

Vue.component("about", About);

storiesOf("Pages", module)
  .add("About", () => ({
    comopnents: { About },
    template: "<about />"
  }));
