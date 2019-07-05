import { configure } from "@storybook/vue";
const path = require("path");

const req = require.context("../components", true, /.stories(.js|.jsx|.ts)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  require("../pages/index.story.ts");
  require("../pages/about/index.story.ts");
}

configure(loadStories, module);
