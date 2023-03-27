<script>
import { store } from '../store'

export default {
    props: {
        restaurateur: Object,
    },
    data(){
        return{
            restaurateurs: [],
            store,
        }
    },
}
</script>


<template>
    <div>
        <div class="card-body">
                                <div class="card-title">
                                    <h5>{{ restaurateur.name }}</h5>
                                </div>
                                <router-link :to="{ name: 'Plates', params: { id: restaurateur.id } }" class="btn btn-sm btn-success">Leggi</router-link>
                            </div>
    </div>
</template>


<style lang="scss" scoped>
    img{
        width: 200px;
        height: 300px;
    }
</style>