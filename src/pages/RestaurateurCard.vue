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
                <h5>{{ restaurateur.types.name }}</h5>
            </div>
            <template v-if="restaurateur.types.length">
                <div class="d-flex gap-2 flex-wrap align-items-center">
                    <span>Tag: </span>
                    <span v-for="tag in restaurateur.types" class="badge bg-info text-white text-uppercase">{{ tag.name
                    }}</span>
                </div>
            </template>
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