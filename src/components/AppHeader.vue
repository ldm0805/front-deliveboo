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
                    // routeName: 'HomePage'
                },
                {
                    label: 'Blog',
                    // routeName: 'PostList'
                },
                {
                    label: 'Contatti',
                    // routeName: 'contacts'
                },
            ]
        }

    },
    methods: {
        getRestaurateurs(restaurateur_page) {
            // this.loading = true,
            axios.get(`${this.store.baseUrl}/api/restaurateurs`).then((response) => {
                if (response.data.success) {
                    console.log(response.data.success)
                    this.restaurateurs = response.data.results.data;
                    // this.currentPage = response.data.results.current_page;
                    // this.lastPage = response.data.results.last_page;
                    // this.loading = false;
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
    <div>
        CIAOOOOP
    </div>
</template>
<style lang="scss" scoped></style>