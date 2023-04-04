<script>
import Multiselect from '@vueform/multiselect'
import axios from 'axios';
import AppSearch from './AppSearch.vue'
import { store } from '../store';
export default {
    name: "AppHeader",
    components: {
        AppSearch,
        Multiselect
    },
    data() {
        return {
            restaurateur: [],
            type: '',
            store,
            currentPage: 1,
            types: [],
            menuItems: [
                {
                    label: 'Homepage',
                    routeName: 'HomePage'
                },
                {
                    label: 'Ristoranti',
                    routeName: 'RestaurateurPage'
                },
                {
                    label: 'Braintree',
                    routeName: 'BraintreePage'
                },
                {
                    label: 'Contatti',
                    // routeName: 'contacts'
                },
            ],
            options: []
        }

    },
    //Prova search
    methods: {
        searchAll() {
            const slugify = store.inputText.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
            this.store.searched = slugify
        },
        getTypes(type_page) {
            axios.get(`${this.store.baseUrl}/api/types`, { params: { page: type_page } }).then((response) => {
                if (response.data.success) {
                    this.types = response.data.results;
                    this.types.forEach(element => {
                        this.options.push(element.name)
                    });
                }
                else {

                }

            });
        },
        async RestaurateursList() {
            try {
                if (this.store.selectedType) {
                    const restaurateurs = {};
                    const promises = this.store.selectedType.map(type => {
                        return axios.get(`${this.store.baseUrl}/api/types/${type}`)
                            .then(response => {
                                if (response.data.success) {
                                    const currentRestaurateurs = response.data.restaurateurs;
                                    currentRestaurateurs.forEach(restaurateur => {
                                        if (!restaurateurs[restaurateur.slug]) {
                                            restaurateur.types = [type];
                                            restaurateurs[restaurateur.slug] = restaurateur;
                                        } else {
                                            restaurateurs[restaurateur.slug].types.push(type);
                                        }
                                    });
                                    this.store.currentPage = response.data.restaurateurs.current_page;
                                    this.store.lastPage = response.data.restaurateurs.last_page;
                                }
                            })
                            .catch(error => {
                                console.error(error);
                            });
                    });
                    await Promise.all(promises);
                    this.store.restaurateurs = Object.values(restaurateurs);
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.getTypes()
    },
    computed() {

    }
}
</script>

<template lang="">
    <header class="my-bg-primary my-text-light">
        <div class="container px-0 h-100">
            <nav class="d-flex align-items-center m-0 align-items-center h-100" data-bs-theme="light">
                <div>
                    <a class="navbar-brand fw-bold" href="#">
                      <div>
                          <div style="transform: scale(1);">
                          <svg width="150" height="100" viewBox="0 0 389.91304347826093 103.89720702562627" class="css-1j8o68f"><defs id="SvgjsDefs2918"></defs><g id="SvgjsG2919" featurekey="2ou6gm-0" transform="matrix(0.25194356464152035,0,0,0.25194356464152035,20,20)" fill="#111111"><defs xmlns="http://www.w3.org/2000/svg"></defs><g xmlns="http://www.w3.org/2000/svg"><path class="fil0" d="M151 0c84,0 151,68 151,151 0,63 -39,119 -97,141l0 41 -13 0 0 -36c-27,7 -55,7 -82,0l0 36 -12 0 0 -41c-59,-22 -98,-78 -98,-141 0,-83 68,-151 151,-151zm47 127c17,0 30,18 30,40 0,19 -10,35 -23,39l0 80c55,-22 91,-75 91,-135 0,-80 -65,-145 -145,-145 -80,0 -145,65 -145,145 0,60 37,113 92,135l0 -80c-14,-5 -24,-26 -24,-52 0,-10 2,-19 4,-27l10 0 2 22 3 27 3 -27 2 -22 12 0 3 22 3 27 2 -27 3 -22 8 0c3,8 5,17 5,27 0,26 -11,47 -24,52l0 84c27,8 56,8 82,0l0 -84c-13,-4 -23,-20 -23,-39 0,-22 13,-40 29,-40z" style="fill: #ffffff; fill-rule: nonzero;"></path></g></g><g id="SvgjsG2920" featurekey="kZnDdN-0" transform="matrix(2.619172295681901,0,0,2.619172295681901,112.85699124691185,27.808800185477505)" fill="#ffffff"><path d="M5.36 6 c4.08 0 7.08 3.1 7.08 7 s-3 7 -7.08 7 l-4.16 0 l0 -14 l4.16 0 z M5.34 18.42 c3.34 0 5.4 -2.42 5.4 -5.42 s-2.06 -5.42 -5.4 -5.42 l-2.48 0 l0 10.84 l2.48 0 z M16.1 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z M26.52 18.44 l6.28 0 l0 1.56 l-7.94 0 l0 -14 l1.66 0 l0 12.44 z M36.46 6 l0 14 l-1.66 0 l0 -14 l1.66 0 z M50.18000000000001 6 l1.76 0 l-6.26 14 l-1.38 0 l-6.24 -14 l1.76 0 l5.18 11.82 z M55.2 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z M70.7 12.3 c1.84 0.42 3.04 1.94 3.04 3.7 c0 2.46 -1.6 4 -5.06 4 l-4.72 0 l0 -14 l4.78 0 c2.74 0 4.1 1.56 4.1 3.38 c0 1.34 -0.76 2.42 -2.14 2.92 z M68.62 7.48 l-3 0 l0 4.28 l3 0 c1.6 0 2.58 -0.88 2.58 -2.16 c0 -1.32 -0.92 -2.12 -2.58 -2.12 z M68.62 18.52 c2.4 0 3.46 -0.98 3.46 -2.66 c0 -1.46 -1.06 -2.72 -3.36 -2.72 l-3.1 0 l0 5.38 l3 0 z M82.5 5.800000000000001 c3.64 0 7.16 2.96 7.16 7.2 s-3.52 7.2 -7.16 7.2 c-3.66 0 -7.16 -2.96 -7.16 -7.2 s3.5 -7.2 7.16 -7.2 z M82.5 18.62 c2.74 0 5.44 -2.32 5.44 -5.62 s-2.7 -5.62 -5.44 -5.62 c-2.76 0 -5.44 2.32 -5.44 5.62 s2.68 5.62 5.44 5.62 z M98.62 5.800000000000001 c3.64 0 7.16 2.96 7.16 7.2 s-3.52 7.2 -7.16 7.2 c-3.66 0 -7.16 -2.96 -7.16 -7.2 s3.5 -7.2 7.16 -7.2 z M98.62 18.62 c2.74 0 5.44 -2.32 5.44 -5.62 s-2.7 -5.62 -5.44 -5.62 c-2.76 0 -5.44 2.32 -5.44 5.62 s2.68 5.62 5.44 5.62 z"></path></g></svg></div>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                      </div>
                    </a>
                    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> -->
                </div>

                <!-- Select -->
                <Multiselect class="mx-3"
                v-model="store.selectedType"
                mode="tags"
                :close-on-select="false"
                :searchable="true"
                :create-option="true"
                :options="options" @click="RestaurateursList" @keyup.enter="RestaurateursList"
                />
                
                <div class="w-100" id="navbarNav">
                    <ul class="d-flex list-unstyled gap-2 m-0 justify-content-end">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                            <!-- <a :href="item.routeName" class="nav-link">
                                {{ item.label }}
                            </a> -->
                            <router-link :to="{ name: item.routeName }" class="nav-link">
                                {{ item.label }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'CartPage' }" class="nav-link">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </router-link>
                        </li>
                    </ul>
                </div>
        </nav>
        </div>
    </header>
</template>

<style lang="scss" src="@vueform/multiselect/themes/default.css" >
@use '../styles/partials/variables' as *;

header {
    height: 80px;

    .container-fluid {

        nav {
            background-color: $primary_color !important;
        }

        li {

            .nav-link {
                color: white;
            }
        }

    }
}
</style>