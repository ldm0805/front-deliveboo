<script>
import axios from "axios";
import ContactsPage from "./ContactsPage.vue";

import { store } from "../store";
const dataArray = "storage-key";

export default {
  components: {
    ContactsPage,
  },
  data() {
    return {
      store,
      totalPrice: 0,
      myData: [],
    };
  },
  methods: {
    addPrice(cart) {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        const itemTotal = parseFloat(cart[i].price) * cart[i].quantity;
        total += itemTotal;
      }
      this.totalPrice = total.toFixed(2);
      this.store.total = this.totalPrice;
      console.log(this.store.total);
    },
    myCheck() {
      location.reload();
      window.location.href = "http://localhost:5173/braintree";
    },
    svuota() {
      localStorage.clear();
      location.reload();
    },
  },
  mounted() {
    const personalPlate = JSON.parse(localStorage.getItem(dataArray));
    if (personalPlate) {
      this.myData = personalPlate;
      let arrayCart = Object.values(this.myData);
      if (Array.isArray(arrayCart)) {
        this.myData = arrayCart.filter((word) => word.quantity > 0);
        this.addPrice(this.myData);
      }
    }
    this.store.total = this.totalPrice;
  },
};
</script>
<!-- ciao -->
<template lang="">
  <div class="container">
    <div :class="(this.myData.length) ? ' row d-flex justify-content-between' : 'd-flex align-items-center alternative'">
      <div class="col-12">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="plate in this.myData">
            <ul class="d-flex flex-wrap list-unstyled justify-content-center">
              <li>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    :src="
                      plate.image != null
                        ? `${this.store.baseUrl}/storage/${plate.image}`
                        : 'https://picsum.photos/200/300'
                    "
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ plate.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      {{ plate.price }}
                    </h6>
                    <p class="card-text">{{ plate.description }}</p>
                    <p class="card-text">
                      <strong>Totale prodotto:</strong> {{ plate.quantity }} x
                      {{ plate.price }} &euro;
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="this.myData.length" class="col-sm-12 text-center d-block">
            <span class="total"
              >Totale ordine:
              <span class="number">{{ totalPrice }}</span> &euro;</span
            >
            <div class="mb-4 mt-4 primary">
              <button class="pay pb-white mx-4" @click="myCheck">
                Procedi con il tuo ordine
              </button>
              <button class="close pb-dark mx-4" @click="svuota">
                Svuota il carrello
              </button>
            </div>
          </div>
          <div v-else class="second-view col-12 text-center">
            <p class="mb-5">
              Il tuo carrello è vuoto!
              <i class="fa-regular fa-face-sad-tear"></i> <br />
              Fatti venire fame!
            </p>
            <router-link :to="{ name: 'RestaurateurPage' }" class="nav-link">
              <button>
                <i class="fa-solid fa-utensils"></i>Scopri di cosa hai voglia<i
                  class="fa-solid fa-utensils"
                ></i>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
li {
  list-style-type: none;
  margin: 20px 30px;
  img {
    height: 280px;
    object-fit: cover;
  }
}
.card {
  transition: all 0.25s;
}
.card:hover {
  scale: 1.05;
  box-shadow: 0px 0px 10px$primary_color;
}
.total {
  font-weight: bold;
  font-size: 25px;
  color: rgb(78, 78, 78);
  .number {
    color: $primary_color;
  }
}

.alternative {
  height: 70vh;
}
.primary {
  button {
    background-color: transparent;
    border: 3px solid;
    padding: 0.8em 1.2em;
    font-weight: bold;
    transition: all 0.25s;
  }
  .pay {
    color: $primary_color;
    border-color: $primary_color;
  }
  .pay:hover {
    background-color: $primary_color;
    color: white;
  }
  .close {
    color: rgb(78, 78, 78);
    border-color: rgb(78, 78, 78);
  }
  .close:hover {
    background-color: rgb(78, 78, 78);
    color: $primary_color;
  }
}
.second-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 30px;
    color: rgb(78, 78, 78);

    i {
      color: $primary_color;
      font-size: 40px;
      position: relative;
      top: 5px;
    }
  }

  button {
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
      font-size: 30px;
    }

    &:hover {
      background-color: $primary_color;
      color: white;
    }
  }
  .pb-white {
    padding: 0;
  }
}
</style>
