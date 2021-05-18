<template>
  <router-link :to="path" class="item">
    <div class="title">{{ title }}</div>
    <span class="date">{{ date }}</span>
  </router-link>
</template>
<script src="./Item.js" />
<style lang="scss" scoped src="./Item.scss" />
