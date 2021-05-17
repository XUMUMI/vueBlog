<template>
  <div class="cont">
    <Top class="top" :title="title">
      <router-link to="/archives">文章</router-link>
      <router-link v-for="page in pages" :key="page" :to="page.path">{{
        page.title
      }}</router-link>
    </Top>
    <router-view />
    <Foot class="foot" :name="nickName" :recordNumber="recordNumber" />
  </div>
</template>
<script src="./App.js" />
<style lang="scss" src="./App.scss" />
