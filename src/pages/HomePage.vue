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
  <div class="container-fluid text-center">
    <div class="row">
      <div>
        <AppJumbotronWitouthSelect class="jumbo"> </AppJumbotronWitouthSelect>
      </div>
    </div>
  </div>
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
