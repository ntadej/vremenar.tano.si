const path = require('path')
const withTM = require('next-transpile-modules')(['@tano/common']);

module.exports = withTM({
  webpack(config, options) {
    if (!options.isServer && config.mode === 'development') {
      const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
      config.plugins.push(
        new I18NextHMRPlugin({
          localesDir: path.resolve(__dirname, 'public/static/locales')
        })
      );
    }

    return config;
  }
});
