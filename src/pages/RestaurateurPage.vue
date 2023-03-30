<script>
import axios from 'axios';
import { store } from '../store';
import RestaurateurCard from './RestaurateurCard.vue';

export default {
    name: "RestaurateurPage",

    components: {
        RestaurateurCard,
    },

    data() {
        return {
            restaurateurs: [],
            store,
            currentPage: 1,
            lastPage: null,
            loading: true,
        }

    },
    methods: {
        getRestaurateurs(restaurateur_page) {
            this.loading = true,
                axios.get(`${this.store.baseUrl}/api/restaurateurs`, { params: { page: restaurateur_page } }).then((response) => {
                    if (response.data.success) {
                        this.restaurateurs = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
                        this.loading = false;
                    }
                    else {

                    }

                });
        }
    },

    mounted() {
        this.getRestaurateurs()
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="parent">                
                <div class="d-flex justify-content-center" v-if="loading">
                    <div class="loader"></div> 
                </div>
                <div v-else class="row-grid ">
                    <div :class="restaurateur.slug.includes(this.store.searched) ? 'my-3' : ' d-none'" v-for="restaurateur in restaurateurs" :key="restaurateur.id" >
                        <RestaurateurCard :restaurateur="restaurateur"/>                            
                    </div>                     
                </div>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-12 d-flex justify-content-center">
                <nav>
                    <ul class="pagination">
                        <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getRestaurateurs(currentPage - 1)">Prev</button>
                        </li>
                        <li :class="currentPage === i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                            <button class="page-link" @click="getRestaurateurs(i)">{{i}}</button>
                        </li>
                        <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getRestaurateurs(currentPage + 1)">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.row-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

@media(max-width: 991px) {
    .row-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width: 767px) {
    .row-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>