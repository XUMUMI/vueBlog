<template>
  <div>
    <router-link v-if="prev" :to="prev.path" class="nav prev">
      {{ prev.title }}
    </router-link>
    <router-link v-if="next" :to="next.path" class="nav next">
      {{ next.title }}
    </router-link>
  </div>
</template>
<script src="./Nav.js" />
<style scoped lang="scss" src="./Nav.scss" />
