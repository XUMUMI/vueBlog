<template>
  <div>
    <router-link v-if="prev" :to="prevLink" class="nav prev">
      {{ prev }}
    </router-link>
    <router-link v-if="next" :to="nextLink" class="nav next">
      {{ next }}
    </router-link>
  </div>
</template>
<script src="./Nav.js" />
<style scoped lang="scss" src="./Nav.scss" />
