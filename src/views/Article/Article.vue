<template>
  <div>
    <Page :cont="cont" />
    <Copyright :author="author" />
    <Tags />
    <Nav :prev="prev" :next="next" />
  </div>
</template>
<script src="./Article.js" />
<style lang="scss" src="./Article.scss" />
