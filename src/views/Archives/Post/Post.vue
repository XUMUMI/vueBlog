<template>
  <div class="post">
    <div class="pack">{{ pack }}</div>
    <Item
      v-for="article in articles"
      :key="article"
      :date="article.date"
      :path="article.path"
      :title="article.title"
    />
  </div>
</template>
<script src="./Post.js" />
<style lang="scss" scoped src="./Post.scss" />
