<template>
  <div>
    <Header/>
    <div class="main">
      <div class="tag-list">
        <div class="tag-item" v-for="tag in $tags.tags" :key="tag.name">
          <div class="tag-title">
            <router-link :to="tag.path">
              {{ tag.name }} ({{ tag.posts.length }})
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@theme/components/Header'
  import Footer from '@theme/components/Footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="stylus">
.tag-list
  width 70%
  &::after
    display: block;
    content: "";
    clear: both;

.tag-item
  font-size 25px
  font-weight: 300
  text-align left
  box-sizing border-box
  width: 33.333%;
  float: left;
  transition: background-color .3s;
  a
    color #b58900
    text-decoration none
  &:hover
    a
      color: #ff69b4 !important

@media screen and (max-width: 1000px)
  .tag-item
    width: 50%;
    font-size 20px
@media screen and (max-width: 768px)
  .tag-item
    width: 100%;
    font-size 20px
</style>
