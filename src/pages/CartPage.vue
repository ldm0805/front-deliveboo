<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            totalPrice: 0,
        };
    },
    methods: {
        addPrice(cart) {
            let total = 0;

            for (let i = 0; i < this.store.cart.length; i++) {
                const itemTotal = parseFloat(this.store.cart[i].price) * this.store.cart[i].quantity;
                total += itemTotal;
            }
            this.totalPrice = total.toFixed(2)
        },
        myCheck() {
            location.reload();
            window.location.href = "http://localhost:5173/braintree";

        },
        svuota() {
            localStorage.clear();
            location.reload();
        },
    },
    mounted() {
        this.addPrice(this.store.cart);
        const myData = localStorage.getItem('myData');
        if (myData) {
            this.store.cart = JSON.parse(myData);
            if (Array.isArray(this.store.cart)) {
                this.store.cart.forEach(plate => {
                    if (typeof plate === 'object' && plate !== null && 'quantity' in plate) {
                        const savedPlate = this.myData.find(savedPlate => savedPlate.id === plate.id);
                        if (savedPlate) {
                            plate.quantity = savedPlate.quantity;
                        } else {
                            plate.quantity = 0;
                        }
                    }
                });
            }
        }
    },
}
</script>

<template lang="">
    <div>
       <ul>
        <li v-for="plate in this.store.cart">
            <div class="card" style="width:18rem;">
                <img class="card-img-top"
            :src="plate.image != null ? `${this.store.baseUrl}/storage/${plate.image}` : 'https://picsum.photos/200/300'"
            alt="">
              <div class="card-body">
                <h5 class="card-title"> {{ plate.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted "> {{ plate.price }}</h6>
                <p class="card-text"> {{ plate.description }}</p>
                <p class="card-text"><strong>Totale prodotto:</strong>  {{ plate.quantity }} x {{ plate.price }}  &euro;</p>
              </div>
            </div>
        </li>
        Totale ordine: {{ totalPrice }} &euro;
       </ul>
    </div>
    <div class="mb-4">
        <button class="btn btn-sm btn-success" @click = "myCheck">Procedi con il tuo ordine</button>
        <button class="btn btn-warning" @click="svuota">cestino</button>
    </div>
</template>

<style lang="scss" scoped>
li {
    list-style-type: none;
}
</style>