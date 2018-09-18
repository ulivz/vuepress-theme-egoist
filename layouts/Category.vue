<template>
  <LayoutWrapper>
    <div class="main">
      <List :items="$category.posts"/>
    </div>
  </LayoutWrapper>
</template>

<style lang="stylus">
  a {
    font-weight 300;
    text-decoration: none;
  }
</style>
