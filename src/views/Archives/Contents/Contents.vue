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
<script src="./Contents.js" />
<style lang="scss" scoped src="./Contents.scss" />
