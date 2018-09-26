module.exports = {
  layoutDir: 'layouts',
  plugins: [
    '@vuepress/blog',
    '@vuepress/pagination',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  palette: {
    $accentColor: '#b58900',
    $textColor: '#586e75',
    $borderColor: '#eaecef',
    $codeBgColor: '#282c34',
    $arrowBgColor: '#ccc'
  }
}
