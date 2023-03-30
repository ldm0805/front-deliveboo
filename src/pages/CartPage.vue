<script>
import { store } from '../store';
export default {
    name: 'CartPage',
    data() {
        return {
            store,
            totalPrice: 0,
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
            console.log(total)
        },
        myCheck() {
            window.location.href = "http://127.0.0.1:8000/payment";
            // this.$router.push('api/mycheck/pages');
            // this.$store.dispatch('fetchmycheck');
        }

    },
    mounted() {
        this.addPrice(this.store.cart)
    },
}
</script>

<template lang="">
    <div>
       <ul>
        <li v-for="plate in this.store.cart">
            {{ plate.name }}
            {{ plate.price }}
            {{ plate.quantity }}
        </li>
        totale: {{ totalPrice }} &euro;
       </ul>
    </div>
    <div>
        <button @click = "myCheck">Carrello</button>
    </div>
</template>

<style lang="">
    
</style>