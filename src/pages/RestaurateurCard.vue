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
    <div class="card">
        <img class="card-img-top" :src="restaurateur.image != null ? `${this.store.baseUrl}/storage/${restaurateur.image}` : 'https://picsum.photos/200/300'" alt="">
        <div class="card-body">
            <div class="card-title">
                <h5>{{ restaurateur.name }}</h5>
            </div>
            <p class="card-text">{{ restaurateur.address }}</p>
            <router-link :to="{ name: 'Plates', params: { slug: restaurateur.slug } }"
                class="btn btn-sm btn-success">Descrizione</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
</style>