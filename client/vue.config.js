module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // modify the options...
        return options;
      });
  },
  // outputDir: path.resolve(__dirname, "../server/public"),
  
}