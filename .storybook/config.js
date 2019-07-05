import { configure } from "@storybook/vue";

const req = require.context("../components", true, /.stories(.js|.jsx|.ts)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
