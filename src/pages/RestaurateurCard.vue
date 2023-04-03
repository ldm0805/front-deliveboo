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
<!-- Ciao sono un -->
<template>
    <div class="card">
        <img class="card-img-top"
            :src="restaurateur.image != null ? `${this.store.baseUrl}/storage/${restaurateur.image}` : 'https://picsum.photos/200/300'"
            alt="">

        <div class="card-body">
            <div class="card-title">
                <h5>Ristorante: {{ restaurateur.name }}</h5>
            </div>
            <p class="card-text">Indirizzo: {{ restaurateur.address }}</p>
            <template v-if="restaurateur.types.length">
                <div class="d-flex gap-2 flex-wrap align-items-center">
                    <span>Tag: </span>
                    <span v-for="(tag, index) in restaurateur.types" class="badge bg-info text-white text-uppercase"
                        :key="index">{{ tag.name
                        }}</span>
                </div>
            </template>
            <router-link :to="{ name: 'Plates', params: { slug: restaurateur.slug } }" class="button">Vai ai
                piatti</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.button {
    background-color: $primary_color;
    padding: .5em 1em;
    margin: .5em 0em;
    border-radius: .2em;
    text-decoration: none;
    color: white;
    display: inline-block;

    &:hover {
        background-color: #f86036;
    }

    .card-img-top {
        height: 200px;
    }
}
</style>