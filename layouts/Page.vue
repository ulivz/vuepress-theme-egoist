<template>
  <LayoutWrapper>
    <div class="main">
      <div class="page-header">
        <h1 class="page-title">{{ $page.frontmatter.title }}</h1>
        <h2 class="page-subtitle" v-if="$page.frontmatter.subtitle">
          {{ $page.frontmatter.subtitle }}
        </h2>
      </div>
      <div class="page-body">
        <div class="alert alert-warning" v-if="$page.frontmatter.warning">
          {{ $page.frontmatter.warning }}
        </div>
        <div class="markdown-body">
          <Content slot="default"/>
        </div>
      </div>
      <div class="report-bugs" v-if="$page.frontmatter.type === 'post'">
        文章勘误可以直接到 <a target="_blank" :href="`https://github.com/egoist/blog/blob/master/source/_posts/${page.slug}.md`">源代码地址</a>
        修改或者 <a target="_blank" href="https://github.com/egoist/blog/issues/new">提交 ISSUE</a>，感谢阅读！
      </div>
    </div>
  </LayoutWrapper>
</template>

<script>
  export default {
    head () {
      const title = this.$page.frontmatter.title
      let summary = this.$page.frontmatter.subtitle || this.$page.excerpt
      if (summary) {
        // Strip HTML tags
        summary = summary.replace(/<(?:.|\n)*?>/gm, '')
      }
      return {
        title,
        meta: [
          {
            name: 'description',
            content: summary
          },
          {
            name: 'twitter:card',
            content: summary
          },
          {
            name: 'twitter:creator',
            content: `@${this.$themeConfig.twitter}`
          },
          {
            name: 'twitter:title',
            content: title
          },
          {
            name: 'twitter:description',
            content: summary
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .markdown-body
    img
      max-width: 100%

    h2, h3, h4, h5
      font-weight: 300

    h2
      margin-top: 1em
      margin-bottom: 16px
      line-height: 1.4
      color: #b58900
      border-bottom: 1px solid #eee8d5
      font-size: 2.4rem
      padding-bottom: .6rem

    p
      margin-top: 0
      margin-bottom: 16px

    ul, ol
      list-style: cjk-ideographic
      padding-left: 0
      li
        background: rgba(0, 0, 0, .04)
        padding: 3px 10px
        &:nth-child(2n)
          background: rgba(37, 26, 26, .11)

    blockquote
      margin: 0
      padding: 0 15px
      color: #777
      border-left: 4px solid #eee8d5

    hr
      box-sizing content-box
      height 0
      height 0
      margin 15px 0
      overflow hidden
      background transparent
      border 0
      border-bottom 1px solid #ddd
      height 4px
      padding 0
      margin 16px 0
      background-color rgba(0, 0, 0, .04)
      border 0 none
      &:before
        display table
        content ""
      &:after
        display table
        clear both
        content ""

  @media screen and (max-width: 768px)
    .markdown-body
      ul, ol
        list-style: none
</style>

<style scoped lang="stylus">
  .main
    max-width: 60rem

  .page-title
    font-weight: 300
    color: #b58900
    font-size: 4rem
    margin: 0
    line-height: 1.2

  .page-subtitle
    color: #93a1a1
    font-weight: 300
    line-height: 120%
    margin-top: 10px

  .page-body
    color: #657b83
    font-size: 18px
    line-height: 1.8
    margin: 30px 0

  .report-bugs
    padding: 10px
    color: #657b83
    margin-top: 30px
    border: 1px dashed rgba(37, 26, 26, .11)

  .alert
    padding: 10px
    border-radius: 4px
    margin-top: 20px
    border: 1px solid

  .alert-warning
    border-color: #ef5753
    color: #cc1f1a
    background-color: #fcebea
    margin-bottom: 30px

  @media screen and (max-width: 768px)
    .page-title
      font-size: 1.6rem

    .page-subtitle
      font-size: 1rem

    .page-body
      font-size: 15px
</style>

<style lang="stylus">
  code
    font-size: 1rem
    tab-size: 4
    color: #bd10e0
    font-family: "fira code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace
    &:before, &:after
      content: "`"

  pre
    border: 1px solid #eee8d5
    margin-top: 30px
    margin-bottom: 30px
    overflow: auto
    white-space: pre-wrap
    word-break: break-word
    font-weight: 400
    padding: 20px
    code
      padding: 0
      margin: 0
      background-color: transparent
      border: 0
      color: inherit
      &:before, &:after
        content: ''
        display: none

  @media screen and (max-width: 768px)
    .pre-wrapper
      margin-left: -10px
      margin-right: @margin-left
      pre
        padding: 10px
      .code-mask
        padding: 10px 0

  .footnote-ref
    margin 0 5px
    a
      text-decoration none
      &:focus
        outline none
        color #DD4A68
        font-weight bold
      &:hover
        text-decoration none

  .footnotes
    .footnote-item
      p
        margin 0
        margin-top 0 !important
      &.is-focus
        border-left: 2px solid
        border-color: #E91E63
        outline: none
        .footnote-backref
          color: @border-color

    .footnote-backref
      text-decoration none
      &:hover
        text-decoration none

  hr.footnotes-sep
    margin 40px 0
    height 1px
    position relative
    overflow: visible
    &:after
      content: '脚注'
      position absolute
      left 50%
      top 50%
      transform translateX(-50%) translateY(-50%)
      background #fdf6e3
      padding: 0 10px
      font-size 1rem
      color rgba(0, 0, 0, 0.26)
</style>
