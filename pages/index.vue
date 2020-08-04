<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">{{title}}</h1>
      <p>点击次数：{{count}}</p>
      <a-button @click="bindClickCount">点我</a-button>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" scoped>
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
