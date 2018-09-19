<template>
  <LayoutWrapper>
    <div class="main">
      <Content/>
      <EgoistTags :tags="$tags.list.slice(0, 10)"/>
      <List :items="$pagination.posts"/>
      <Pagination/>
    </div>
  </LayoutWrapper>
</template>

<style lang="stylus">
  .post-title
    font-weight: 300
    font-size: 2rem
    margin: 0 0 15px 0
    a
      color: #b58900
      text-decoration: none
      &:hover
        color: #ff69b4

  @media screen and (max-width: 768px)
    .post-title
      font-size: 16px

    .egoist-tags
      margin-bottom 10px
</style>
