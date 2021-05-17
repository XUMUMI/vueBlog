<template>
  <a
    class="link-item"
    :title="title"
    :target="self ? '_self' : '_blank'"
    rel="noopener"
    :href="path"
  >
    <i :class="`iconfont icon-${icon}`"></i>
  </a>
</template>
<script src="./Icon.js" />
<style scoped lang="scss" src="./Icon.scss" />
