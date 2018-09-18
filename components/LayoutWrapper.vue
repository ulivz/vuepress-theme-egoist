<template>
  <div>
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@theme/components/Header'
  import Footer from '@theme/components/Footer'

  export default {
    components: { Header, Footer }
  }
</script>
