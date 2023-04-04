<script>
import { store } from '../store';
import axios from 'axios';
import Multiselect from '@vueform/multiselect'
export default {
    name: 'AppMain',
	components: {
		Multiselect
	},
	data() {
        return {
            restaurateur: [],
            type: '',
            store,
            currentPage: 1,
            types: ['1', '2'],
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
		searchMedia() {
            this.$emit('search')
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
                    console.log(this.store.restaurateurs);
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
    <!-- Select -->
	<Multiselect class="mx-3"
	v-model="store.selectedType"
	mode="tags"
	:close-on-select="false"
	:searchable="true"
	:create-option="true"
	:options="options" @click="RestaurateursList" @keyup.enter="RestaurateursList" />
</template>
<style lang="scss"  src="@vueform/multiselect/themes/default.css">
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>