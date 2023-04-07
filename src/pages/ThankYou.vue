<script>
export default {
  name: "ThankYou",
};
</script>
<template lang="">
  <div class="container">
    <div class="row my-5">
      <div class="col-12 text-center">
        <h2>Grazie per aver ordinato!</h2>
        <h4>
          Controlla la tua mail per visualizzare il riepilogo dell'ordine!
        </h4>
        <router-link :to="{ name: 'HomePage' }" class="pb-orange"
          >Torna alla home</router-link
        >
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
