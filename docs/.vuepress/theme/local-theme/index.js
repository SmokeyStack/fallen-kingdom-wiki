const { path } = require('@vuepress/utils')

module.exports = {
  // inherit the default theme
  extends: '@vuepress/theme-default',
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: {
          ComingSoon: path.resolve(__dirname, './components/pages/ComingSoon.vue'),
        },
      },
    ],
  ],
  // override the `404` layout
  layouts: {
    404: path.resolve(__dirname, './layouts/404.vue'),
  },
}