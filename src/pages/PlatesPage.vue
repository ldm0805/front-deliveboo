<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            myData: [],
            loading: false
        }
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
            localStorage.setItem('myData', JSON.stringify(this.myData));
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
                localStorage.setItem('myData', JSON.stringify(this.myData));
            }
        }
    },
    mounted() {
        this.loading = true;
        const myData = localStorage.getItem('myData');
        if (myData) {
            this.myData = JSON.parse(myData);
            this.loading = false;
        } else {
            axios.get(`${store.baseUrl}/api/restaurateurs/${this.$route.params.slug}`).then(response => {
                if (response.data.success) {
                    this.myData = response.data.plates;
                    localStorage.setItem('myData', JSON.stringify(this.myData));
                    this.loading = false;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<template lang="">
    <div v-for="plate in myData" :key="plate.id">
    <div class="name">{{ plate.name }}</div>
    <div class="price">{{ plate.price }}</div>
        <div class="quantity">
        <button class="btn" @click="decreaseQuantity(plate)"><i class="fa-solid fa-minus"></i></button>
                <span>{{ plate.quantity }}</span>    
            <button class="btn" @click="addQuantity(plate)"><i class="fa-solid fa-plus"></i></button>
        </div>
    <div>
    </div>
</div>


    
</template>

<style lang="scss" scoped></style>