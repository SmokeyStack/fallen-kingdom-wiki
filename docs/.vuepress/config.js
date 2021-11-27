const { path } = require('@vuepress/utils');

module.exports = {
  lang: 'en-US',
  title: 'Fallen Kingdom Wiki',
  description: 'This is my first VuePress site',
  theme: path.resolve(__dirname, './theme/local-theme/index.js'),
  base: '/fallen-kingdom-wiki/',
  themeConfig: {
	logo: '/images/FK.png',
	navbar: [
      // NavbarItem
      {
        text: 'Changelogs',
        link: '/changelogs/',
      },
	  {
        text: 'Information',
        children: ['/changelogs/', '/blocks/'],
      },
    ],
  },
}