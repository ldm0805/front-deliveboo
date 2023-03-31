import { reactive } from 'vue';
export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',
    cart: [],
    inputText: '',
    searched: '',
    selectedType: null,
    restaurateurs: [],
    restaurateursrwo: [],
    currentPage: 1,
    lastPage: null,

})
