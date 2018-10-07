const path = require('path')

module.exports = {
  plugins: [
    '@vuepress/blog',
    '@vuepress/pagination',
    [
      '@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    [
      '@vuepress/register-components', {
      componentsDir: [
        path.resolve(this.sourceDir, '.vuepress/components')
      ]
    }]
  ]
}
