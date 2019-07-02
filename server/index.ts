import * as express from "express";
import { Nuxt, Builder } from "nuxt";
import config from "../nuxt.config";
const consola = require("consola");

// Import and Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === "production");

const app = express();

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
