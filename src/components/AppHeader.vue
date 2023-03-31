<script>
import axios from 'axios';
import AppSearch from './AppSearch.vue'
import { store } from '../store';
export default {
    name: "AppHeader",
    components: {
        AppSearch
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
                    label: 'Contatti',
                    // routeName: 'contacts'
                },
            ]
        }

    },
    //Prova search
    methods: {
        searchAll() {
            const slugify = store.inputText.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
            this.store.searched = slugify
            console.log(this.store.searched)
        },
        getTypes(type_page){
            axios.get(`${this.store.baseUrl}/api/types`, { params: { page: type_page } }).then((response) => {
                if (response.data.success) {
                        this.types = response.data.results;
                    }
                else {

                }

                });
        },
        filter(){
            this.store.selectedType = this.type
            console.log(this.store.selectedType)
        }
    },
    mounted(){
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
                    <a class="navbar-brand fw-bold" href="#">Deliveboo</a>
                    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> -->
                </div>

                <!-- Search -->
                <div class="right-search d-flex">
                    <AppSearch @search="searchAll"/>
                </div>

                <!-- Select -->
                <select name="" id="" v-model="type" @change="filter">
                    <option :value="type.name" v-for="(type) in types">
                        {{ type.name }}
                    </option>
                </select>

                
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
<style lang="scss" scoped>
    header {
        height: 80px;
    }
</style>