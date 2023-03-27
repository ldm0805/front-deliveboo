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
    <div>
        <div class="card-body">
            <div class="card-img-top">
                <img :src="restaurateur.image != null ? `${this.store.baseUrl}/storage/${restaurateur.image}` : 'https://picsum.photos/200/300'"
                    alt="">
            </div>
            <div class="card-title">
                <h5>{{ restaurateur.name }}</h5>
            </div>
            <p class="card-text">{{ restaurateur.address }}</p>
            <router-link :to="{ name: 'Plates', params: { id: restaurateur.id } }"
                class="btn btn-sm btn-success">Descrizione</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
img {
    width: 200px;
    height: 300px;
}
</style>