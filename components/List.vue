<template>
  <div>
    <div class="egoist-item" v-for="(item, index) in items" :key="index">
      <h2 class="item-title">
        <router-link :to="item.path">
          {{ item.title }}
        </router-link>
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items']
  }
</script>

<style lang="stylus">
  .item-title
    font-weight: 300
    font-size: 2rem
    margin: 0 0 15px 0
    a
      color: #b58900
      text-decoration: none
      &:hover
        color: #ff69b4

  .pagination
    a
      margin-right: 20px
      color: #b58900
      height: 38px
      line-height: 38px
      transition: all .3s ease
      position: relative
      overflow: hidden
      display: inline-block
      background: #eee8d5
      padding: 0 15px
      text-decoration: none
      &:before
        content: attr(title)
        width: 100%
        left: 0
        transform: translateX(-100%)
        text-align: center
        top: 0
        bottom: 0
        background-color: #b58900
        position: absolute
        transition: transform .3s ease
        z-index: 1
        color: #eee8d5
      &:hover
        color: #eee8d5
        &:before
          transform: translateX(0)

  .cat
    font-size: 5rem
    color: #586e75
    margin-bottom: 20px

  @media screen and (max-width: 768px)
    .item-title
      font-size: 16px

    .cat
      font-size: 2rem
</style>
