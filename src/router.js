// //1 passaggio: importiamo i metodi dal pacchetto createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

// //2 importare le componenti che rappresentano le pagine
import HomePage from './pages/HomePage.vue';
import RestaurateurPage from './pages/RestaurateurPage.vue';
import PlatesPage from './pages/PlatesPage.vue';
import CartPage from './pages/CartPage.vue'
// import PostList from './pages/PostList.vue';
// import SinglePost from './pages/SinglePost.vue';
// import NotFound from './pages/NotFound.vue';
// import Contacts from './pages/Contacts.vue';
// import ThankYou from './pages/ThankYou.vue';




// //3 creiamo l'oggetto router, nell'array di oggetti inseriamo i dati delle nostre rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/restaurateur/',
            name: 'RestaurateurPage',
            component: RestaurateurPage
        },
        {
            path: '/restaurateur/:slug',
            name: 'Plates',
            component: PlatesPage
        },
        {
            path: '/cart',
            name: 'CartPage',
            component: CartPage
        },
    ]
})

// 4 esportiamo il router

export { router };

