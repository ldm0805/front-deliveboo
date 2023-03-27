<script>
import axios from 'axios';
import { store } from '../store';
import RestaurateurCard from './RestaurateurCard.vue';

export default {
    name: "RestaurateurPage",

    components:{
    RestaurateurCard,
  },

    data() {
        return {
            restaurateurs: [],
            store,
            currentPage: 1,
            loading: true,
        }

    },
    methods: {
        getRestaurateurs(restaurateur_page) {
            this.loading = true,
            axios.get(`${this.store.baseUrl}/api/restaurateurs`).then((response) => {
                if (response.data.success) {
                    console.log(response.data.results)
                    this.restaurateurs = response.data.results;
                    // this.currentPage = response.data.results.current_page;
                    // this.lastPage = response.data.results.last_page;
                    this.loading = false;
                }
                else {
                    this.loading = false
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
    <div>
        <div v-if="loading">
            <div class="loader">
            </div> 
        </div>
        <div v-else class="d-flex flex-wrap col-12">

                <RestaurateurCard class="card my-3 col-3 m-2" v-for="(restaurateur, index) in restaurateurs" :restaurateur="restaurateur" :key="restaurateur.id" />


        </div>
    </div>
</template>

<style lang="scss" scoped>
        .loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>