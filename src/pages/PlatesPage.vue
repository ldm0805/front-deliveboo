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
                plate.quantity++
            }
            else {
                plate.quantity = 1
                this.store.cart.push(plate)
            }


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
    }
}
</script>

<template lang="">
    <div v-for="plate in plates">
       <div class="name">
            {{ plate.name }}
       </div>
       <div class="price">
            {{ plate.price }}
       </div>
       <i class="fa-solid fa-cart-shopping" @click="addQuantity(plate)"></i>
    </div>
</template>

<style lang="scss" scoped></style>