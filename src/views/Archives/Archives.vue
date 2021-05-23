<template>
  <div>
    <Contents
      v-for="post in posts"
      :key="post"
      :articles="post.articles"
      :pack="post.pack"
    />
  </div>
</template>
<script src="./Archives.js" />
<style lang="scss" scoped src="./Archives.scss" />
