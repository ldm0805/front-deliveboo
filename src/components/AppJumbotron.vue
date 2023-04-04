<script>
	import axios from 'axios';
	import AppSearch from './AppSearch.vue'
	import { store } from '../store';
	import AppSelect from './AppSelect.vue';
    export default {
        name: "AppJumbotron",
		components: {
			AppSearch,
			AppSelect
		},

		data() {
			return {
				store
			}
		}
    }
</script>
<template lang="">
    <section class="jumbotron d-flex align-items-center justify-content-center my-text-light flex-column">
			<h1>Sì che hai fame</h1>
			<AppSelect class="w-50" />
	</section>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
	.jumbotron {
		height: 500px;
		// background-image: url('../assets/img/food-table-1.jpg');
		background-size: cover;
		background-image: linear-gradient(180deg, rgba($color: $dark_color, $alpha: 0.3), rgba($color: $dark_color, $alpha: 0.3)), url('../assets/img/food-table-1.jpg');

	}
</style>