<template>
  <div class="post">
    <div class="pack">{{ pack }}</div>
    <Item
      v-for="article in articles"
      :key="article"
      :title="article.title"
      :path="article.path"
      :date="article.date"
    />
  </div>
</template>
<script src="./Post.js" />
<style scoped lang="scss" src="./Post.scss" />
