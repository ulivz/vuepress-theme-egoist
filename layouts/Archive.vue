<template>
  <LayoutWrapper>
    <div class="main">
      <Content/>
      <List :items="pages"/>
      <Pagination :pagination="pagination"/>
    </div>
  </LayoutWrapper>
</template>

<script>
  export default {
    created() {
      this.pagination.setIndexPage('/archive/')
    },
    computed: {
      pagination () {
        return this.$pagination('archive')
      },
      pages () {
        return this.pagination.pages
      }
    }
  }
</script>

<style lang="stylus">
  .post-title
    font-weight: 300
    font-size: 2rem
    margin: 0 0 15px 0
    a
      color: #b58900
      text-decoration: none
      &:hover
        color: #ff69b4
  
  @media screen and (max-width: 768px)
    .post-title
      font-size: 16px
    
    .egoist-tags
      margin-bottom 10px
</style>
