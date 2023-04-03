<script>
import axios from 'axios';

import { store } from '../store';
const dataArray = 'storage-key';
export default {
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
            for (let i = 0; i < this.store.cart.length; i++) {
                const itemTotal = parseFloat(this.store.cart[i].price) * this.store.cart[i].quantity;
                total += itemTotal;
            }
            this.totalPrice = total.toFixed(2)
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
            let arrayCart = Object.values(this.myData)
            if (Array.isArray(arrayCart)) {
                this.myData = arrayCart.filter(word => word.quantity > 0)
                this.addPrice(this.myData);
            }
        }
    },
}
</script>

<template lang="">
    <div>
       <ul>
        <li v-for="plate in this.myData">
            <div class="card" style="width:18rem;">
                <img class="card-img-top"
            :src="plate.image != null ? `${this.store.baseUrl}/storage/${plate.image}` : 'https://picsum.photos/200/300'"
            alt="">
              <div class="card-body">
                <h5 class="card-title"> {{ plate.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted "> {{ plate.price }}</h6>
                <p class="card-text"> {{ plate.description }}</p>
                <p class="card-text"><strong>Totale prodotto:</strong>  {{ plate.quantity }} x {{ plate.price }}  &euro;</p>
              </div>
            </div>
        </li>
        Totale ordine: {{ totalPrice }} &euro;
       </ul>
    </div>
    <div class="mb-4">
        <button class="btn btn-sm btn-success" @click = "myCheck">Procedi con il tuo ordine</button>
        <button class="btn btn-warning" @click="svuota">cestino</button>
    </div>
</template>

<style lang="scss" scoped>
li {
    list-style-type: none;
}
</style>