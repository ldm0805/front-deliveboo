import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import "bootstrap/dist/css/bootstrap.min.css"


document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#submit-button');

    braintree.dropin.create({
        authorization: 'sandbox_mfwpf8g9_8qjhpxdgnmhby72v',
        selector: '#dropin-container'
    }, function (err, instance) {
        button.addEventListener('click', function () {
            instance.requestPaymentMethod(function (err, payload) {
                fetch('/process-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nonce: payload.nonce })
                })
                    .then(function (response) {
                        // Handle the response from the server
                    })
                    .catch(function (error) {
                        // Handle errors that occurred during the fetch request
                    });
            });
        })
    });

});


createApp(App).use(router).mount('#app')

