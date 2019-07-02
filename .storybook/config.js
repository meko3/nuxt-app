import { configure } from "@storybook/vue";
import "@storybook/addon-console";

const req = require.context("../components", true, /.story.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
