<template>
  <div class="top">
    <div class="left">
      <router-link to="/">{{ title }}</router-link>
    </div>
    <div class="right">
      <slot />
    </div>
  </div>
</template>
<script src="./Top.js" />
<style lang="scss" scoped src="./Top.scss" />
