<script>
import axios from 'axios';
import { store } from '../store';
import RestaurateurCard from './RestaurateurCard.vue';
import AppJumbotron from '../components/AppJumbotron.vue';
import AppCart from '../components/AppCart.vue';


export default {
    name: "RestaurateurPage",

    components: {
        RestaurateurCard,
        AppJumbotron,
        AppCart 
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
    <AppCart />
    <AppJumbotron />
    <div class="container" v-if="this.store.selectedType == null">
        <div class="row">
            <div class="parent"> 
                <h1 class="text-center py-4 m-0">Ristoranti</h1>               
                <div class="d-flex justify-content-center " v-if="loading">
                    <div class="">
                        <div class="contain-svg mt-5 loading">
                                <svg style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <defs/>
                                    <clipPath id="ArtboardFrame">
                                        <rect height="83.9" width="369.91" x="0" y="0"/>
                                    </clipPath>
                                    <g class="loader" clip-path="url(#ArtboardFrame)" id="SvgjsG2920">
                                        <g opacity="1">
                                            <path d="M38.042-1.7053e-13C59.2052-1.7053e-13 76.0854 17.1327 76.0854 38.0447C76.0854 53.9177 66.2596 68.027 51.6469 73.57L51.6469 83.9L48.3716 83.9L48.3716 74.8297C41.5692 76.5934 34.5147 76.5934 27.7123 74.8297L27.7123 83.9L24.6889 83.9L24.6889 73.57C9.82428 68.027-0.0015221 53.9177-0.0015221 38.0447C-0.0015221 17.1327 17.1306-1.7053e-13 38.042-1.7053e-13ZM49.8833 31.9979C54.1663 31.9979 57.4416 36.533 57.4416 42.076C57.4416 46.8631 54.9222 50.8943 51.6469 51.9021L51.6469 72.0583C65.5038 66.5153 74.5738 53.1619 74.5738 38.0447C74.5738 17.8886 58.1974 1.51171 38.042 1.51171C17.8865 1.51171 1.51014 17.8886 1.51014 38.0447C1.51014 53.1619 10.8321 66.5153 24.6889 72.0583L24.6889 51.9021C21.1617 50.6423 18.6423 45.3514 18.6423 38.8006C18.6423 36.2811 19.1462 34.0135 19.6501 31.9979L22.1695 31.9979L22.6734 37.5408L23.4292 44.3435L24.1851 37.5408L24.6889 31.9979L27.7123 31.9979L28.4681 37.5408L29.2239 44.3435L29.7278 37.5408L30.4836 31.9979L32.4992 31.9979C33.255 34.0135 33.7589 36.2811 33.7589 38.8006C33.7589 45.3514 30.9875 50.6423 27.7123 51.9021L27.7123 73.0661C34.5147 75.0817 41.8211 75.0817 48.3716 73.0661L48.3716 51.9021C45.0964 50.8943 42.5769 46.8631 42.5769 42.076C42.5769 36.533 45.8522 31.9979 49.8833 31.9979Z" fill="#fe724c" fill-rule="nonzero" opacity="1" stroke="none"/>
                                           
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <h5>Work in progress</h5>
                    </div> 
                </div>
                <div v-else class="row-grid">
                    <div v-for="restaurateur in restaurateur"  class="mb-3" :key="restaurateur.id">
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
        <div class="row py-5" v-if="this.store.myData.length != 0">
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
.contain-svg {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;


    svg {
        height: 100%;
        width: 100%;

    }
}


.contain-svg {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;

    svg {

        height: 100%;
        width: 100%;
    }
}

.loader {
    animation: spin 1.5s ease-in-out infinite;

}

@keyframes spin {
    0% {
        transform: scale(1);
    }


    100% {
        transform: scale(2);
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