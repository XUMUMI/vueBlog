<template>
  <div class="main">
    <div class="info">
      <a href="/archives"> <img src="~@/image/XUMUMI.png" alt="XUMUMI"/></a>
      <div class="nickname">XUMUMI</div>
      <div class="description">
        <p>
          When you don’t create things, you become defined by your tastes rather
          than ability.
          <br />
          Your tastes only narrow and exclude people.
          <strong>So create</strong>.
        </p>
      </div>
      <div class="links">
        <Icon title="Blog" url="/archives" icon="blog" self />
        <Icon
          v-for="(value, name) in icons"
          :key="name"
          :title="name"
          :url="value.url"
          :icon="value.icon"
        />
      </div>
    </div>
  </div>
</template>
<script src="./Home.js" />
<style scoped lang="scss" src="./Home.scss" />
