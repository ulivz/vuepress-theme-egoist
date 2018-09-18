<template>
  <div class="egoist-tags">
    <EgoistTag
      v-for="tag in tags"
      :key="tag.name"
      :tag="tag"
    />
  </div>
</template>

<script>
  export default {
    props: ['tags']
  }
</script>

<style lang="stylus" scoped>
  .egoist-tags
    width 66%

  @media screen and (max-width: 1000px)
    .egoist-tags
      width 90%
</style>
