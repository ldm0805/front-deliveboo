import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import "bootstrap/dist/css/bootstrap.min.css"


document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#submit-button');

    braintree.dropin.create({
        authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
        selector: '#dropin-container'
    }, function (err, instance) {
        button.addEventListener('click', function () {
            instance.requestPaymentMethod(function (err, payload) {
                // Submit payload.nonce to your server
            });
        })
    });
});

createApp(App).use(router).mount('#app')

