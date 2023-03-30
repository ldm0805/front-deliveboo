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
            if (this.store.cart.includes(plate)) {
                plate.quantity++;
                console.log(this.store.cart)
            } else {
                plate.quantity++;
                console.log(this.store.cart)
                plate.quantity = 1;
                this.store.cart.push(plate);
                console.log(this.store.cart)

            }
        },

        decreaseQuantity(plate) {
            if (this.store.cart.includes(plate)) {
                    plate.quantity--
                    console.log(this.store.cart)

                } else {
                    plate.quantity == 0
                    console.log(this.store.cart)

                }
            }
        },
    mounted(){

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

}
</script>

<template lang="">
    <div v-for="plate in plates">
    <div class="name">{{ plate.name }}</div>
    <div class="price">{{ plate.price }}</div>
    <div class="quantity">
        <button class="btn" @click="decreaseQuantity(plate)"><i class="fa-solid fa-minus"></i></button>
        <span>{{ plate.quantity }}</span>

        <button class="btn" @click="addQuantity(plate)"><i class="fa-solid fa-plus"></i></button>
    </div>
  </div>


    
</template>

<style lang="scss" scoped></style>