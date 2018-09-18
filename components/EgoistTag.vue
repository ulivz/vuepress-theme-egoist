<template>
  <router-link class="egoist-tag" :to="tag.path">
    {{ tag.name }} ({{ tag.posts.length }})
  </router-link>
</template>

<script>
  export default {
    props: ['tag']
  }
</script>

<style lang="stylus" scoped>
  .egoist-tag
    display inline-block
    word-break break-word
    font-size 20px
    margin-right 20px
    margin-bottom 20px
    padding 3px 15px
    border-radius 30px
    font-weight: 300
    text-align left
    box-sizing border-box
    transition: background-color .3s
    color #b58900
    background-color rgba(0, 0, 0, 0.04)
    text-decoration none
    &:hover
      color: #ff69b4 !important
  @media screen and (max-width: 768px)
    .egoist-tag
      font-size 14px
      padding 3px 10px
      margin-right 10px
      margin-bottom 10px
</style>
