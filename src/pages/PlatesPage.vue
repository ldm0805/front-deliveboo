<script>
import axios from 'axios';
import { store } from '../store';
const dataArray = 'storage-key';


export default {
    data() {
        return {
            store,
            myData: [],
            loading: false,
            plateSlug: [],
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
        }

    },
    mounted() {
        axios.get(`${store.baseUrl}/api/restaurateurs/${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
                if (window.localStorage.length == 0) {
                    this.plateSlug = response.data.plates;
                    this.loading = false;
                }
                else {
                    let myData = (JSON.parse(localStorage.getItem(dataArray)));
                    this.plateSlug = response.data.plates;
                    this.loading = false;

                    for (let i in myData) {
                        if (myData[i].restaurateur_id == this.plateSlug[i]['restaurateur_id']) {
                            this.plateSlug = myData;
                        }
                    }
                }
            }
        })
    }
}
</script>

<template lang="">
    <div v-for="plate in this.plateSlug" :key="plate.id">
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