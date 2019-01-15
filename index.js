const path = require('path')

const POST_PERMALINK = '/:year/:month/:day/:slug'

module.exports = {
  name: 'vuepress-theme-egoist',
  plugins: [
    ['@vuepress/blog', {
      // 基于目录的分类
      // 声明哪些目录下的文档将会被认为是 post
      // name 声明了类型
      // dirname 声明了子目录的名字
      // permalink 决定了该目录下所有 post 将会采用的 permalink pattern
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          // 列表页（只有一个）
          path: '/post/',
          layout: 'IndexPost',
          // 详情页（N个）
          itemLayout: 'Post',
          itemPermalink: POST_PERMALINK,
          // 通过 this.$pagination.$post 访问
          pagination: {
            perPagePosts: 10
          }
        },
        {
          id: 'archive',
          dirname: '_archive',
          // 列表页（只有一个）
          path: '/archive/',
          layout: 'Archive',
          // 详情页（N个）
          itemLayout: 'Post',
          itemPermalink: `/archive/${POST_PERMALINK}`,
          // 通过 this.$pagination.$archive 访问
          pagination: {
            perPagePosts: 10
          }
        }
      ],
      // 基于 frontmatter 的分类
      // 声明哪些目录下的文档将会被认为是额外添加的聚合页
      // name 决定了 fronmatter 上分类的属性名
      // path 决定了该聚合页的路径
      frontmatters: [
        {
          id: "category",
          keys: ['category', 'categories'],
          path: '/category/',
          layout: 'Categories',
          frontmatter: { title: 'Categories' },
          itemlayout: 'Category',
          // 通过 this.$pagination.$category 访问
          pagination: {
            perPagePosts: 10
          }
        },
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tags',
          frontmatter: { title: 'Tags' },
          itemlayout: 'Tag',
          // 通过 this.$pagination.$category 访问
          pagination: {
            perPagePosts: 10
          }
        }
      ]
    }],
    [
      '@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    [
      '@vuepress/register-components', {
      componentsDir: [
        path.resolve(__dirname, 'components')
      ]
    }]
  ]
}
