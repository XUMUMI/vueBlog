<template>
  <div class="archive">
    <Post
      v-for="post in posts"
      :key="post"
      :pack="post.pack"
      :articles="post.articles"
    />
  </div>
</template>
<script src="./Archives.js" />
<style scoped lang="scss" src="./Archives.scss" />
