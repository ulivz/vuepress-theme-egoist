<template>
  <div
    class="pagination"
    v-if="$pagination"
  >
    <router-link
      class="prev"
      title="新的文章"
      v-if="$pagination.hasPrev"
      :to="$pagination.prevLink"
    >
      新的文章
    </router-link>
    <router-link
      class="next"
      title="旧的文章"
      v-if="$pagination.hasNext"
      :to="$pagination.nextLink"
    >
      旧的文章
    </router-link>
  </div>
</template>

<style lang="stylus">
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
</style>
