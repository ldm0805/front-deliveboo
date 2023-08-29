<script>
import axios from "axios";
import ContactsPage from "../pages/ContactsPage.vue";

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
      window.location.href = "http://localhost:5173/cart";
    },
    svuota() {
      localStorage.clear();
      location.reload();
    },

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

    axios
      .get(`${store.baseUrl}/api/restaurateurs/${this.$route.params.slug}`)
      .then((response) => {
        if (response.data.success) {
          console.log(window.localStorage.length);
          if (window.localStorage.length == 1) {
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
<!-- ciao -->
<template lang="">
  <div class="position-absolute ">
    <div class="position-fixed bottom-0 end-0 m-5 dropup">
      <a
        href="#"
        class="floating-cart rounded-circle my-bg-primary"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
      <div class="dropdown-menu mb-3">
        <div class="" v-for="plate in this.myData">
          <ul class="d-flex flex-wrap justify-content-center p-0">
            <li>
              <div class="card hover" style="width: 18rem">
                <div class="card-body">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="card-title d-inline">{{ plate.name }}</h5>
                    <div>{{ plate.quantity }}</div>
                  </div>

                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ plate.price }} &euro;
                  </h6>
                  <p class="card-text">
                    <strong>Totale:</strong>
                    {{ plate.quantity * plate.price }} &euro;
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="d-flex justify-content-center pb-white hover"
          @click="myCheck"
        >
          {{ totalPrice }} &euro; Conferma Ordine
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
ul {
  margin: 0;
  li {
    list-style-type: none;
    margin-bottom: 20px;
    img {
      height: 280px;
      object-fit: cover;
    }
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

.floating-cart {
  color: #ffffff;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 999999;
}

.dropdown-menu {
  padding: 20px;
}

.my-bg-primary {
  background-color: $primary_color;

  &:hover {
    background-color: $primary_color;
  }
}
.hover {
  &:hover {
    cursor: pointer;
  }
}
</style>
