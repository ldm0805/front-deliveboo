<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            name: '',
            surname: '',
            mail: '',
            phone: '',
            address: '',
            date: '',
            total: '',
            errors: {},
            success: false,
            loading: false,

            store,
        }
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                mail: this.mail,
                phone: this.phone,
                address: this.address,
                date: '2020/04/12',
                total: this.store.total,
                slug: this.name

            }
            console.log(data)
            this.loading = true;
            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if (!response.data.success) {
                    this.errors = response.data.errors
                    this.loading = false;
                }
                else {
                    this.name = '';
                    this.surname = '';
                    this.mail = '';
                    this.phone = '';
                    this.address = '';
                    this.success = true;
                    this.loading = false;
                    setTimeout(() => {
                        this.$router.push({ 'name': 'thank-you' });
                    }, 2000)
                }
            });
        }
    }

}
</script>

<template lang="">
    <div class="w-50">
        <form @submit.prevent="sendForm">
            <div class="row">
                <div>
                    <label class="control-label" for="nome">Nome:</label>
                    <input type="text" class="form-control" name="name" id="name" v-model="name" placeholder="nome">
                <div v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                            </div>
                </div>
                <div>
                    <label class="control-label" for="cognome">Cognome:</label>
                    <input type="text" class="form-control" name="surname" id="surname" v-model="surname" placeholder="cognome">
                <div v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                            </div>
                </div>
                <div>
                    <label class="control-label" for="email">Email:</label>
                    <input type="text" class="form-control" name="mail" id="mail" v-model="mail" placeholder="email">
                <div v-for="(error, index) in errors.mail" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                            </div>
                </div>
                <div>
                    <label class="control-label" for="telefono">Telefono:</label>
                    <input type="text" class="form-control" name="phone" id="phone" v-model="phone" placeholder="telefono">
                <div v-for="(error, index) in errors.phone" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                            </div>
                </div>
                <div>
                    <label class="control-label" for="indirizzo">Indirizzo:</label>
                    <input type="text" class="form-control" name="address" id="address" v-model="address" placeholder="indirizzo">
                <div v-for="(error, index) in errors.address" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                            </div>
                </div>
                <div class="mt-4 text-center">
                    <button type="submit" class="send_email" :disabled="loading">{{loading ? 'Sto inviando...' : 'Invia'}}</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

button {
    background-color: transparent;
    border: 3px solid $primary_color;
    border-radius: 10px;
    padding: 3px 6px;
    color: $primary_color;
    font-weight: bold;
    transition: all 0.25s;

    &:hover {
        background-color: $primary_color;
        color: white;
    }
}
</style>