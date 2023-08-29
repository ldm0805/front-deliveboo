<script>
import axios from "axios";
import { store } from "../store";
const dataArray = "storage-key";
import AppCart from "../components/AppCart.vue";

export default {
  components: { AppCart },
  data() {
    return {
      store,
      myData: [],
      loading: false,
      plateSlug: [],
      restaurateur: [],
    };
  },
  methods: {
    addQuantity(plate) {
      if (store.myData.includes(plate)) {
        plate.quantity++;
      } else {
        plate.quantity++;
        const index = store.myData.findIndex((el) => el === plate);
        if (index !== -1) {
          plate.quantity = store.myData[index].quantity;
        }
        store.myData.push(plate);
      }
      localStorage.setItem(dataArray, JSON.stringify(this.plateSlug));
    },

    decreaseQuantity(plate) {
      if (plate.quantity > 0) {
        if (store.myData.includes(plate)) {
          plate.quantity--;
        } else {
          plate.quantity--;
          const index = store.myData.findIndex((el) => el === plate);
          if (index !== -1) {
            plate.quantity = store.myData[index].quantity;
          }
          store.myData.push(plate);
        }
        localStorage.setItem(dataArray, JSON.stringify(this.plateSlug));
      }
    },
  },
  mounted() {
    axios
      .get(`${store.baseUrl}/api/restaurateurs/${this.$route.params.slug}`)
      .then((response) => {
        if (response.data.success) {
          if (window.localStorage.length == 0) {
            this.plateSlug = response.data.plates;
            this.restaurateur = response.data.restaurateur;
            this.loading = false;
          } else {
            let myData = JSON.parse(localStorage.getItem(dataArray));
            this.plateSlug = response.data.plates;
            this.restaurateur = response.data.restaurateur;
            this.loading = false;

            for (let i in myData) {
              if (
                myData[i].restaurateur_id ==
                this.plateSlug[i]["restaurateur_id"]
              ) {
                this.plateSlug = myData;
              }
            }
          }
        }
      });
  },
};
</script>

<template lang="">
  <AppCart class="AppCart" />
  <div class="wrapper">
    <h1 class="text-center">Menù</h1>
    <h2 class="head-title">{{ restaurateur.name }}</h2>
    <div class="no-dishes mt-5">
      <div v-if="plateSlug.length === 0" class="">
        Il ristorante sta aggiornando il menù.
        <div>
        <div class="loader loader--style3 d-flex justify-content-center" title="2">
          <svg
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 50 50"
            style="enable-background: new 0 0 50 50"
            xml:space="preserve"
          >
            <path
              fill="#000"
              d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
      </div>
    </div>
    <div class="cards">
      <div
        class="card"
        v-show="!plate.visible ? `` : 'd-none'"
        v-for="plate in this.plateSlug"
        :key="plate.id"
      >
        <div class="">
          <div class="card__image">
            <img
              :src="
                plate.image != null
                  ? `${this.store.baseUrl}/storage/${plate.image}`
                  : 'https://picsum.photos/200/300'
              "
              alt=""
            />
          </div>
          <div class="card__content">
            <div class="card__header">
              <h4 class="card__title">{{ plate.name }}</h4>
            </div>
            <h6 class="card__price">&euro; {{ plate.price }}</h6>
            <h4 class="card__title">Ingredienti:</h4>
            <p class="card__text">{{ plate.ingredients }}</p>
            <h4 class="card__title">Descrizione:</h4>

            <p class="card__text">{{ plate.description }}</p>

            <div v-if="!plate.availability">
              <span class="text-danger">Piatto non disponibile</span>
            </div>
            <div
              class="d-flex align-items-center justify-content-end"
              v-if="plate.availability"
            >
              <button class="btn" @click="decreaseQuantity(plate)">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span>{{ plate.quantity }}</span>
              <button class="btn" @click="addQuantity(plate)">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'CartPage' }" class="nav-link">
      <div class="cart-link">
        <button class="pb-orange cart">
          <i class="fa-solid fa-cart-shopping"></i> Guarda il carrello
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.cart-link {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

h2,
h4 {
  color: var(--clr-head);
}

h2 {
  font-size: var(--fs-h2);
}

.wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 3em auto;
  padding: 0 2em;
}

.head-title {
  text-align: center;
  font-size: 1.4em;
}

.head-text {
  max-width: 520px;
  margin: auto;
  margin-top: 0.5em;
}

.cards {
  max-width: 100%;
  width: 1100px;
  margin-top: 6em;
  display: grid;
  grid-template-columns: repeat(3, 1.5fr);
  grid-gap: 2rem;
}

@media (max-width: 991px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 10px 15px 50px 0 rgba(0, 0, 0, 0.09);
}

.card__image {
  height: 200px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 1.4em;
  background-color: #fff;
}

.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
}

.card__price {
  font-size: 1.5rem;
  color: var(--clr-accent);
}

.card__text {
  font-size: 1.1rem;
}
.cart {
  background-color: transparent;
  border: 3px solid $primary_color;
  padding: 5px 5px;
  color: $primary_color;
  font-weight: bold;
  transition: all 0.25s;
  display: flex;
  align-items: center;

  i {
    margin: 5px 20px;
    font-size: 25px;
  }

  &:hover {
    background-color: $primary_color;
    color: white;
  }
}
.card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
}
.AppCart {
  z-index: 99;
}
.loader {
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
}

/*
  Set the color of the icon
*/
svg path,
svg rect {
  fill: #fe724c;
}
.no-dishes {
  display: flex;
  justify-content: center;
}
</style>
