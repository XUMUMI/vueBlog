<template>
  <div class="home">
    <div class="info">
      <router-link to="/archives">
        <img :alt="nickName" src="~@/assets/image/logo.svg" />
      </router-link>
      <div class="nickname">{{ nickName }}</div>
      <div class="description" v-html="description" />
      <div class="links">
        <Icon
          v-for="(value, name) in iconsCN"
          :key="name"
          :icon="value.icon"
          :path="value.path"
          :title="name"
        />
      </div>
      <div class="links">
        <Icon
          v-for="(value, name) in iconsCD"
          :key="name"
          :icon="value.icon"
          :path="value.path"
          :title="name"
          self
        />
      </div>
      <div class="links" v-if="!inCN">
        <Icon
          v-for="(value, name) in icons"
          :key="name"
          :icon="value.icon"
          :path="value.path"
          :title="name"
          self
        />
      </div>
    </div>
  </div>
</template>
<script src="./Home.js" />
<style lang="scss" scoped src="./Home.scss" />
