const vueConfig = require("@vue/cli-service/webpack.config.js");
const path = require("path");
const rootPath = path.resolve(__dirname, "../");

module.exports = async ({ config }) => {
  return {
    ...config,
    resolve: {
      ...vueConfig.resolve,
      alias: {
        ...vueConfig.resolve.alias,
        "vue$": "vue/dist/vue.esm.js",
        "~": rootPath,
      },
    },
    module: {
      ...vueConfig.module,
      rules: [
        ...vueConfig.module.rules,
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
        },
      ],
    },
  }
}