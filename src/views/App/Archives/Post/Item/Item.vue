<template>
  <router-link class="item" :to="path">
    <div class="title">{{ title }}</div>
    <span class="date">{{ date }}</span>
  </router-link>
</template>
<script src="./Item.js" />
<style scoped lang="scss" src="./Item.scss" />
