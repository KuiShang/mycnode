<template>
  <div id="app">
    <VHeader></VHeader>
    <VContent></VContent>
    <AsideMenu></AsideMenu>
    <transition name="show">
      <Login v-if="isShowLogin"></Login>
    </transition>
    <transition name="show">
      <Msg v-if="isShowMsg"></Msg>
    </transition>
    <transition name="show">
      <NewArticle v-if="isShowNewArticle"></NewArticle>
    </transition>
  </div>
</template>

<script>
  import VHeader from './components/Header/Header.vue'
  import VContent from '@/components/ArticleList/Content.vue'
  import AsideMenu from '@/components/AsideMenu/AsideMenu.vue'
  import Login from '@/components/Login/Login.vue'
  import Msg from './components/Msg/Msg.vue'
  import NewArticle from './components/NewArticle/NewArticle.vue'
  export default {
    name: 'app',
    components: {
      VHeader,
      VContent,
      AsideMenu,
      Login,
      Msg,
      NewArticle
    },
    computed: {
      isShowLogin() {
        return this.$store.state.isShowLogin
      },
      isShowMsg() {
        return this.$store.state.isShowMsg
      },
      isShowNewArticle() {
        return this.$store.state.isShowNewArticle
      }
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
  .router-link-active{
    color: red;
  }
</style>
