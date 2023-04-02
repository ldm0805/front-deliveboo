<script>
export default {
    name: 'NotFound'
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Pagina non trovata!</h2>
                <router-link :to="{ name : 'PostList'}" class="btn btn-sm btn-danger">Torna alla pagina</router-link>
            </div>
        </div>
        
    </div>
</template>
<style lang="">
    
</style>