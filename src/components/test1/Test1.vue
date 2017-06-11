<template lang="html">
  <transition name="right">
    <div class="test1">
      123
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        $route: this.$route
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('111')
      next()
    },
    watch: {
      $route () {
        console.log(123123123)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .test1 {
    width: 100%;
    height: 150%;
  }
  .right-enter-active {
    transition: all .3s ease;
  }
  .right-leave-active {
    transition: all .2s ease-out;
  }
  .right-enter, .right-leave-active {
    transform: translateX(150px);
    opacity: 0;
  }
</style>
