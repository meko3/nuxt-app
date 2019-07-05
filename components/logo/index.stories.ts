import { storiesOf } from "@storybook/vue"
import Vue from "vue"

import Logo from "./Logo.vue"

Vue.component("logo", Logo);

storiesOf("Components", module)
  .add("Logo", () => ({
    component: { Logo },
    template: "<logo />",
    props: {},
  }))
  ;
