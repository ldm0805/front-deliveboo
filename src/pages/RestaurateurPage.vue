<script>
import axios from 'axios';
import { store } from '../store';
import RestaurateurCard from './RestaurateurCard.vue';
import AppJumbotron from '../components/AppJumbotron.vue';

export default {
    name: "RestaurateurPage",

    components: {
        RestaurateurCard,
        AppJumbotron
    },

    data() {
        return {
            store,
            loading: true,
            restaurateur: [],
            currentPage: 0,
            lastPage: null
        }

    },
    methods: {
        getRestaurateurs(restaurateur_page) {
            this.loading = true,
            console.log(store.selectedType)
                axios.get(`${this.store.baseUrl}/api/restaurateurs`, { params: { page: restaurateur_page } }).then((response) => {
                    if (response.data.success) {
                        this.store.restaurateurs = response.data.results.data;
                        this.store.currentPage = response.data.results.current_page;
                        this.store.lastPage = response.data.results.last_page;
                        this.restaurateur = response.data.results.data;
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
    },
}
</script>

<template lang="">
    <AppJumbotron />
    <div class="container" v-if="this.store.selectedType == null">
        <div class="row">
            <div class="parent">                
                <div class="d-flex justify-content-center" v-if="loading">
                    <div class="loader"></div> 
                </div>
                <div v-else class="row-grid">
                    <div v-for="restaurateur in restaurateur"  class="my-3" :key="restaurateur.id">
                        <RestaurateurCard :restaurateur="restaurateur"/>                            
                    </div>                     
                </div>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-12 d-flex justify-content-center">
                <nav>
                    <ul class="pagination">
                        <li :class="this.store.currentPage === 1 ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getRestaurateurs(this.store.currentPage - 1)">Prev</button>
                        </li>
                        <li :class="this.store.currentPage === i ? 'disabled' : 'page-item'" v-for="i in this.store.lastPage">
                            <button class="page-link" @click="getRestaurateurs(i)">{{i}}</button>
                        </li>
                        <li :class="this.store.currentPage === this.store.lastPage ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getRestaurateurs(this.store.currentPage + 1)">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="container" v-else-if="this.store.selectedType == ''">
        <div class="row">
            <div class="parent">                
                <div class="d-flex justify-content-center" v-if="loading">
                    <div class="loader"></div> 
                </div>
                <div v-else class="row-grid">
                    <div v-for="restaurateur in restaurateur"  class="my-3" :key="restaurateur.id">
                        <RestaurateurCard :restaurateur="restaurateur"/>                            
                    </div>                     
                </div>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-12 d-flex justify-content-center">
                <nav>
                    <ul class="pagination">
                        <li :class="this.currentPage === 1 ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getRestaurateurs(this.currentPage - 1)">Prev</button>
                        </li>
                        <li :class="this.currentPage === i ? 'disabled' : 'page-item'" v-for="i in this.lastPage">
                            <button class="page-link" @click="getRestaurateurs(i)">{{i}}</button>
                        </li>
                        <li :class="this.currentPage === this.lastPage ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getRestaurateurs(this.currentPage + 1)">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="container" v-else>
        <div class="row">
            <div class="parent">                
                <div class="d-flex justify-content-center" v-if="loading">
                    <div class="loader"></div> 
                </div>
                <div v-else class="row-grid">
                    <div v-for="restaurateur in this.store.restaurateurs"  class="my-3" :key="restaurateur.id">
                        <RestaurateurCard :restaurateur="restaurateur"/>                            
                    </div>
                </div>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-12 d-flex justify-content-center">
                <nav>
                    <ul class="pagination">
                        <li :class="this.store.currentPage === 1 ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getRestaurateurs(this.store.currentPage - 1)">Prev</button>
                        </li>
                        <li :class="this.store.currentPage === i ? 'disabled' : 'page-item'" v-for="i in this.store.lastPage">
                            <button class="page-link" @click="getRestaurateurs(i)">{{i}}</button>
                        </li>
                        <li :class="this.store.currentPage === this.store.lastPage ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getRestaurateurs(this.store.currentPage + 1)">Next</button>
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

    .card {
        height: 100%;
    }
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