<script>
import AppJumbotron from '../components/AppJumbotron.vue';
export default {
    name: "HomePage",
    components: {
        AppJumbotron
    }
}
</script>
<template lang="">
    <div class="container px-0 text-center">
        <div class="row">
            <div class="col">
                <h1>Hai Fame?</h1>
                <router-link :to="{ name: 'RestaurateurPage' }" class="btn btn-outline-dark">Trova dei ristoranti</router-link>
            </div>
        </div>
    </div>
    
</template>
<style lang="scss" scoped></style>