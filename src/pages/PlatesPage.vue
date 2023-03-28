<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "PlatesPage",
    data() {
        return {
            store,
            loading: true,
            plates: [],
        }
    },
    methods: {
        addQuantity(plate) {
            const index = this.store.cart.findIndex(plate => plate.name === plate.name);
            if (index === -1) {
                plate.quantity = 1;
                this.store.cart.push(plate);
            } else {
                this.store.cart[index].quantity++;
            }
        },

        decreaseQuantity(plate) {
            const index = this.store.cart.findIndex(plate => plate.name === plate.name);
            if (index !== -1) {
                const newQuantity = this.store.cart[index].quantity - 1;
                if (newQuantity > 0) {
                    this.store.cart[index].quantity = newQuantity;
                } else {
                    this.store.cart.splice(index, 1);
                }
            }
        },
        addTotal() {
            this.addPrice(this.store.cart)
        }
    },
    mounted() {

        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/restaurateurs/${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
                this.plates = response.data.plates
                this.loading = false
            }
            else {

                this.$router.push({ name: 'not-found' })

            }
        })
    },
    computed: {
        totalQuantity() {
            let total = 0;
            for (const plate of this.store.cart) {
                total += plate.quantity;
            }
            return total;
        },
    },
}
</script>

<template lang="">
    <div v-for="plate in plates">
    <div class="name">{{ plate.name }}</div>
    <div class="price">{{ plate.price }}</div>
    <div class="quantity">
        <button class="btn" @click="decreaseQuantity(plate)"><i class="fa-solid fa-minus"></i></button>
        <span>{{ totalQuantity}}</span>

        <button class="btn" @click="addQuantity(plate)"><i class="fa-solid fa-plus"></i></button>
    </div>
  </div>


    
</template>

<style lang="scss" scoped></style>