<template>
  <header class="header">
    <h1 class="site-name">
      <router-link to="/">
        {{ $siteTitle }}
      </router-link>
    </h1>
    <ul class="nav" v-if="$themeConfig.nav">
      <li v-for="item in $themeConfig.nav" class="nav-item">
        <router-link :to="item.link">{{ item.text }}</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="stylus">
.header
  height: 30px
  line-height: 30px
  background-color: #93a1a1
  display: flex
  font-size: 14px

.site-name
  font-size: 14px
  margin: 0
  font-weight: 400
  a
    width: 70px
    padding-left: 10px
    display: block
    color: #eee8d5
    text-decoration: none
    background: #586e75
    &:hover
      font-weight: bold

.nav
  display: flex
  list-style: none
  margin: 0
  padding-left: 0
  .nav-item
    margin-left: 15px
  a
    color: #586e75
    text-decoration: none
    &:hover
      color: #eee8d5
      background: transparent
</style>
