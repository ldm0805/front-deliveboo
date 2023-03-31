<script>
import AppHeader from './components/AppHeader.vue'
export default {
	components: {
		AppHeader
	}
}
</script>
<template lang="">
	<AppHeader></AppHeader>
	<router-view></router-view>
</template>
<style lang="scss">
	@use './styles/app.scss' as *;
</style>