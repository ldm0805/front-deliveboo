import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import "bootstrap/dist/css/bootstrap.min.css"
var button = document.querySelector('#submit-button');

braintree.dropin.create({
    authorization: 'sandbox_mfb44vg7_y7bkdpct43k678pk',
    selector: '#dropin-container'
}, function (err, instance) {
    button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (err, payload) {
            // Submit payload.nonce to your server
        });
    })
});

createApp(App).use(router).mount('#app')

