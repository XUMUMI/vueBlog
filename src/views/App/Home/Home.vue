<template>
  <div class="main">
    <div class="info">
      <router-link to="/archives">
        <!--TODO 矢量化-->
        <img src="~@/assets/image/logo.png" :alt="nickName" />
      </router-link>
      <div class="nickname">{{ nickName }}</div>
      <div class="description" v-html="description" />
      <div class="links">
        <Icon title="Blog" path="/archives" icon="blog" self />
        <Icon
          v-for="(value, name) in icons"
          :key="name"
          :title="name"
          :path="value.path"
          :icon="value.icon"
        />
      </div>
    </div>
  </div>
</template>
<script src="./Home.js" />
<style scoped lang="scss" src="./Home.scss" />
