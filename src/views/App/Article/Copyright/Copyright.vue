<template>
  <div class="copyright">
    <p class="copyright-item">
      <span>by {{ nickName }}</span>
    </p>
    <p class="copyright-item">
      <span>
        Copyright ©️ {{ year }}
        <a :href="link" rel="noopener" target="_blank"> {{ license }} </a>
        LICENSE
      </span>
    </p>
  </div>
</template>
<script src="./Copyright.js" />
<style lang="scss" scoped src="./Copyright.scss" />
