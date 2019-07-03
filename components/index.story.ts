import { storiesOf } from "@storybook/vue";
import Radio from "./radio.vue";

storiesOf("Hello World", module)
  .add("testcase", () => ({
    template: "<div>hello storybook nuxt</div>",
    props: {},
  }))
  .add("radio", () => ({
    component: { Radio },
    props: {},
  }))
  ;
