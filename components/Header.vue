<template>
  <header id="header">
    <h1 class="site-name">
      <router-link to="/">
        {{ $themeConfig.headerTitle || $siteTitle }}
      </router-link>
    </h1>
    <ul class="nav" v-if="$themeConfig.nav">
      <li v-for="item in $themeConfig.nav" class="nav-item">
        <router-link :to="item.link">{{ item.text }}</router-link>
      </li>
    </ul>
    <div class="search-wrapper">
      <SearchBox/>
    </div>
  </header>
</template>

<script>
  import SearchBox from '@SearchBox'

  export default {
    components: {
      SearchBox
    }
  }
</script>

<style lang="stylus">
@import '~@app/style/config'

#header
  height: 30px
  line-height: 30px
  background-color: #93a1a1
  display: flex
  font-size: 14px
  position relative

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

@media (min-width: $MQMobile)
  .search-wrapper
    flex 1
    text-align right
    .search-box
      text-align left
      & > input
        line-height 20px
        background-size .8rem
        background-position .3rem .3rem
        border-radius 0
        padding: 0 0.5rem 0 1.2rem;
      .suggestions
        right: 0;
      a:hover
        background: transparent

@media (max-width: $MQMobile)
  #header
    margin-bottom 45px
  .search-wrapper
    position absolute
    bottom -45px
    right 10px
    .search-box
      & > input
        left 0
        line-height 30px
        box-sizing border-box
        width calc(100vw - 20px) !important
        border-radius 5px
    .suggestions
      width calc(100vw - 20px) !important
</style>
