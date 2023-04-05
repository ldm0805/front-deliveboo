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
    <div class="wrapper">
        <h2 class="head-title">Explore Our Foods</h2>
        <p class="head-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna.</p>
        <div class="cards">
            <div v-for="plate in this.plateSlug" :key="plate.id">
                <!-- <div class="card" v-show="!plate.visible ? `` : 'd-none'"> -->
                <div class="card">
                    <img :src="plate.image != null ? `${this.store.baseUrl}/storage/${plate.image}` : 'https://picsum.photos/200/300'"
                        alt="">
                    <div class="card__content">
                        <div class="card__header">
                            <h4 class="card__title">{{ plate.name }}</h4>
                            <span class="card__price">&euro; {{ plate.price }}</span>
                        </div>
                        <h4 class="card__title">Ingredienti:</h4>
                        <p class="card__text">{{ plate.ingredients }}</p>
                        <h4 class="card__title">Descrizione:</h4>

                        <p class="card__text">{{ plate.description }}</p>

                        <div v-show="!plate.availability">
                            <span class="text-danger">Piatto non disponibile</span>
                        </div>
                        <div v-show="plate.availability">
                            <button class="btn" @click="decreaseQuantity(plate)"><i
                                    class="fa-solid fa-minus"></i></button>
                            <span>{{ plate.quantity }}</span>
                            <button class="btn" @click="addQuantity(plate)"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    h2,
    h4 {
        color: var(--clr-head);
    }

    h2 {
        font-size: var(--fs-h2);
    }

    .wrapper {
        max-width: 1200px;
        width: 100%;
        margin: 3em auto;
        padding: 0 2em;
    }

    .head-title {
        text-align: center;
    }

    .head-text {
        max-width: 520px;
        margin: auto;
        margin-top: 0.5em;
    }

    .cards {
        max-width: 100%;
        width: 1100px;
        margin-top: 6em;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-gap: 6rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        border-radius: 13px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 10px 15px 50px 0 rgba(0, 0, 0, 0.09);
    }

    .card__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .card__content {
        padding: 2em 1.4em;
        background-color: #fff;
    }

    .card__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1em;
    }

    .card__price {
        font-size: 2.5rem;
        color: var(--clr-accent);
    }

    .card__text {
        font-size: 1.4rem;
    }
</style>