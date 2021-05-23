<template>
  <span class="tags">
    <a href="javascript:window.history.back();">{{ $t("back") }}</a>
    ·
    <router-link to="/">{{ $t("home_page") }}</router-link>
  </span>
</template>
<script src="./Tags.js" />
<style scoped lang="scss" src="./Tags.scss" />
