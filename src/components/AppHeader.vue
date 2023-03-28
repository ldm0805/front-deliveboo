<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "AppHeader",
    data() {
        return {
            restaurateur: [],
            store,
            currentPage: 1,

            menuItems: [
                {
                    label: 'Homepage',
                    routeName: 'HomePage'
                },
                {
                    label: 'Ristoranti',
                    routeName: 'RestaurateurPage'
                },
                {
                    label: 'Contatti',
                    // routeName: 'contacts'
                },
            ]
        }

    },
}
</script>

<template lang="">
    <div class="container-fluid">

<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
  <div class="container-fluid">
    <div>
        <a class="navbar-brand" href="#">Deliveboo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            <!--<a :href="item.routeName" class="nav-link">
                {{ item.label }}
            </a> -->
            <router-link :to="{ name: item.routeName }" class="nav-link">
                {{ item.label }}
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'CartPage' }" class="nav-link">
                <i class="fa-solid fa-cart-shopping"></i>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>
<style lang="scss" scoped></style>