import { storiesOf } from "@storybook/vue";
import Centered from "@storybook/addon-centered";
import Logo from "./logo.vue";

storiesOf("Hello World", module)
  .addDecorator(Centered)
  .add("testcase", () => ({
    template: "<div>hello storybook nuxt</div>",
    props: {},
  }))
  .add("logo", () => ({
    component: { Logo },
    template: "<Logo />",
    props: {},
  }))
;
