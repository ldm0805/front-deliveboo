<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "AppHeader",
    data() {
        return {
            restaurateur: [],
            store,
            currentPage: 1,

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
}
</script>
<template lang="">
    <div>
        <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
<!--                             <a :href="item.routeName" class="nav-link">
                                {{ item.label }}
                            </a> -->
                            <router-link :to="{ name: item.routeName }" class="nav-link">
                                {{ item.label }}
                            </router-link>
                    </li>
                </ul>
    </div>
</template>
<style lang="scss" scoped></style>