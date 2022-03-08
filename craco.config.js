const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
              '@text-color': '#fff',
              '@text-color-secondary': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};