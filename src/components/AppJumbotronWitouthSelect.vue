<script>
import axios from "axios";
import AppSearch from "./AppSearch.vue";
import { store } from "../store";
import AppSelect from "./AppSelect.vue";
export default {
  name: "AppJumbotron",
  components: {
    AppSearch,
    AppSelect,
  },

  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
  <div class="container-fluid">
    <section
      class="jumbotron d-flex align-items-center justify-content-center my-text-light flex-column py-4"
    >
      <div class="description w-75">
        <h1>Hai Fame?</h1>
        <p class="my-5">
          Immagina di essere immerso in un'atmosfera culinaria irresistibile:
          l'aroma del pane appena sfornato si diffonde nell'aria, mentre una
          cascata di mozzarella filante copre le pizze appena uscite dal forno.
          Il suono delle bistecche che sfrigolano sulla griglia ti fa venire
          l'acquolina in bocca, mentre l'odore del sugo di pomodoro fresco che
          bolle lentamente sulla stufa ti fa dimenticare qualsiasi altra cosa. I
          dessert come torte al cioccolato fuso, profiteroles farciti di crema e
          fragole fresche ricoperte di cioccolato fondente ti fanno desiderare
          di gustare ogni singolo morso. Questa è solo una piccola parte di ciò
          che potrebbe essere a tua disposizione.
        </p>
        <div class="borde">
          <router-link :to="{ name: 'RestaurateurPage' }" class="pb-white"
            >Trova subito dei ristoranti</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@media screen and (max-width: 900px) {
  .jumbotron {
    height: 100%;
    // background-image: url('../assets/img/food-table-1.jpg');
    background-size: cover;
    background-image: linear-gradient(
        180deg,
        rgba($color: $dark_color, $alpha: 0.7),
        rgba($color: $dark_color, $alpha: 0.7)
      ),
      url("../assets/img/food-table-1.jpg");
  }
}

@media screen and (min-width: 901px) {
  .jumbotron {
    height: 100vh;
    // background-image: url('../assets/img/food-table-1.jpg');
    background-size: cover;
    background-image: linear-gradient(
        180deg,
        rgba($color: $dark_color, $alpha: 0.7),
        rgba($color: $dark_color, $alpha: 0.7)
      ),
      url("../assets/img/food-table-1.jpg");
  }
}

p {
  font-size: 1.5em;
}
</style>
