<template>
  <a
    :href="path"
    :target="self ? '_self' : '_blank'"
    :title="title"
    class="link-item"
    rel="noopener"
  >
    <i :class="`iconfont icon-${icon}`"></i>
  </a>
</template>
<script src="./Icon.js" />
<style lang="scss" scoped src="./Icon.scss" />
