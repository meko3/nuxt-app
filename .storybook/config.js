import { configure } from "@storybook/vue";

const loadStories =  () => {
  require("../components/index");
}

configure(loadStories, module);
