<script>
import { store } from '../store'

export default {
    props: {
        restaurateur: Object,
    },
    data() {
        return {
            restaurateurs: null,
            store,
        }
    },
}
</script>


<template>
    <div class="card" v-if="restaurateur.slug.includes(this.store.searched)">
        <img class="card-img-top"
            :src="restaurateur.image != null ? `${this.store.baseUrl}/storage/${restaurateur.image}` : 'https://picsum.photos/200/300'"
            alt="">
        <div class="card-body">
            <div class="card-title">
                <h5>Ristorante: {{ restaurateur.name }}</h5>
            </div>
            <p class="card-text">Indirizzo: {{ restaurateur.address }}</p>
            <router-link :to="{ name: 'Plates', params: { slug: restaurateur.slug } }"
                class="button">Descrizione</router-link>
        </div>
    </div>
    <div class="card" v-else-if="this.store.searched == ''">
        <img class="card-img-top"
            :src="restaurateur.image != null ? `${this.store.baseUrl}/storage/${restaurateur.image}` : 'https://picsum.photos/200/300'"
            alt="">
        <div class="card-body">
            <div class="card-title">
                <h5>{{ restaurateur.name }}</h5>
            </div>
            <p class="card-text">{{ restaurateur.address }}</p>
            <router-link :to="{ name: 'Plates', params: { slug: restaurateur.slug } }"
                class="button">Descrizione</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.button {
    background-color: $primary_color;
    padding: .5em 1em;
    border-radius: .2em;
    text-decoration: none;
    color: white;

    &:hover {
        background-color: #f86036;
    }
}
</style>