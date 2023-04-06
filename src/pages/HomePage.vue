<script>
import AppJumbotronWitouthSelect from "../components/AppJumbotronWitouthSelect.vue";
export default {
  name: "HomePage",
  components: {
    AppJumbotronWitouthSelect,
  },
};
</script>
<template lang="">
    <AppJumbotronWitouthSelect class="jumbo"> </AppJumbotronWitouthSelect>
</template>
<style lang="scss" scoped>
div {
  padding: 0;

  .container-fluid {
    padding: 0;
    .jumbo {
      position: relative;
      height: 100vh;
    }
  }
}
</style>
