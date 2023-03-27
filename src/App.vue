<script>
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    // AppHeader,


  }
}
</script>
<template lang="">
  <div>
    <!-- <AppHeader></AppHeader> -->
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
@use './styles/app.scss' as *;
</style>