<template>
  <div>
    <Header/>
    <div class="main">
      <div class="post-list">
        <div class="post-item" v-for="post in $tag.posts" :key="post.key">
          <h2 class="post-title">
            <router-link :to="post.path">
              {{ post.title }}
            </router-link>
          </h2>
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
  a {
    font-weight 300;
    text-decoration: none;
  }
</style>
