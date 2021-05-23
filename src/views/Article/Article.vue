<template>
  <div>
    <Page :cont="cont" />
    <Copyright />
    <Tags />
    <Nav
      :prev="prev"
      :prev-link="prevLink"
      :next="next"
      :next-link="nextLink"
    />
  </div>
</template>
<script src="./Article.js" />
<style lang="scss" src="./Article.scss" />
