<template>
  <div id="app">
    <VHeader></VHeader>
    <VContent></VContent>
  </div>
</template>

<script>
  import VHeader from './components/Header/Header.vue'
  import VContent from '@/components/ArticleList/Content.vue'
  export default {
    name: 'app',
    components: {
      VHeader,
      VContent
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "./common/style/base.scss";
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

  }
</style>
