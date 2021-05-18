<template>
  <div class="cont">
    <Top :title="info.title" class="top">
      <router-link to="/archives">{{ info.archivesName }}</router-link>
      <router-link v-for="page in pages" :key="page" :to="page.path">
        {{ page.title }}
      </router-link>
    </Top>
    <router-view class="main" />
    <Foot
      :name="info.nickName"
      :recordNumber="info.recordNumber"
      class="foot"
    />
  </div>
</template>
<script src="./App.js" />
<style lang="scss" src="./App.scss" />
