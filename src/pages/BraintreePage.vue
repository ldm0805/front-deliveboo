<script>
import ContactsPage from './ContactsPage.vue'
import { store } from '../store';
import { onMounted, ref } from 'vue';
export default {
    components: {
        ContactsPage,
    },
    data() {
        return {
            store,
            myData: [],
        };
    },
    methods: {
        reloadPage() {
            location.reload();
        }
    },
    mounted() {
        this.reloadPage;
    }
}
</script>

<template lang="">
 
        <ContactsPage></ContactsPage>


 </template>
<style lang="scss" scoped>
.button {
    cursor: pointer;
    font-weight: 500;
    left: 3px;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}
</style>