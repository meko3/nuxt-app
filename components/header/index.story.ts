import { storiesOf } from "@storybook/vue";
import Header from "./header.vue";

storiesOf("Components", module)
  .add("header", () => ({
    component: { Header },
    template: "<Header />",
  }))
;
