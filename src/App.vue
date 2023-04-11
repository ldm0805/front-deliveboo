<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<template lang="">
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter />
</template>
<style lang="scss">
@use "./styles/app.scss" as *;
</style>
