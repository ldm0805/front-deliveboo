<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "PlatesPage",
    data(){
        return{
            store,
            loading : true,
            plates: [],
        }
    },
    mounted(){
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/restaurateurs/${this.$route.params.id}`).then((response) => {
            if(response.data.success){
                console.log(response.data.plates)
                this.plates = response.data.plates
                this.loading = false
            }
            else{

                this.$router.push({ name:'not-found' })

            }
        })
    }
}
</script>

<template lang="">
    <div v-for="plate in plates">
       <div class="name">
            {{ plate.name }}
       </div>
       <div class="price">
            {{ plate.price }}
       </div>
    </div>
</template>

<style lang="scss" scoped></style>