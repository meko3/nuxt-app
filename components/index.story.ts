import { storiesOf } from "@storybook/vue";

storiesOf("Hello World", module)
  .add("testcase", () => ({
    template: "<div>hello storybook nuxt</div>",
    props: {},
  }));
