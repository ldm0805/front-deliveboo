<script>
import { store } from '../store';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    methods: {
        searchMedia() {
            this.$emit('search')

        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="input-group">
                <input type="text" id="search" class="form-control" placeholder="Ricerca il ristorante" aria-label="Ricerca il film" v-model="store.inputText" @keyup.enter="$emit('search')">
                <button class="btn btn-danger" type="button" @click="searchMedia" >Cerca</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// @use '../styles/partials/variables' as *;
// @use '../styles/partials/mixins' as *;

.form-control:focus {
    border-color: #a50500;
    outline: 0;
    box-shadow: 0 0 0 0rem rgba(117, 0, 0, 0.25);
}
</style>