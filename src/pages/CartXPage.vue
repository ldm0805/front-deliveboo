<template lang="">
    <div>
        
    </div>
</template>
<script>
export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    }
});
</script>
<style lang="">
    
</style>