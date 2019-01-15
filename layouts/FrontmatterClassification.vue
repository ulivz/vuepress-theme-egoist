<template>
  <LayoutWrapper>
    <div class="main">
      <div class="page-header">
        <h2 class="page-title">{{ paths.pid + ' = "' + paths.id + '"'}}</h2>
      </div>
      <List :items="pagination.pages"/>
      <Pagination :pagination="pagination"/>
    </div>
  </LayoutWrapper>
</template>

<script>
  export default {
    created () {
    },
    computed: {
      pagination () {
        const { pid, id } = this.paths
        return this.$pagination(pid, id)
      },
      paths () {
        const path = this.$route.path
        const [pid, id] = path.split('/').filter(v => v)
        return {
          pid,
          id
        }
      }
    }
  }
</script>

<style>
  .page-title {
    text-transform: uppercase;
  }
</style>
