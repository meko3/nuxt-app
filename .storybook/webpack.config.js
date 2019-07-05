const vueConfig = require("@vue/cli-service/webpack.config.js");
const {
  VueLoaderPlugin
} = require('vue-loader');
const path = require("path");

module.exports = async ({
  config
}) => {
  return {
    ...config,
    resolve: {
      extensions: ['.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html'],
      ...vueConfig.resolve,
      alias: {
        ...vueConfig.resolve.alias,
        "vue$": "vue/dist/vue.esm.js",
        '~': path.resolve(__dirname, '../')
      },
    },
    module: {
      ...vueConfig.module,
      rules: [
        ...vueConfig.module.rules,
      ].filter(
        (r) => !(r.options || r.query)
      ),
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  }
}
