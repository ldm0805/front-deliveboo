<script>
export default {

}
</script>

<template lang="">
    <div class="w-50">
        <form>
            <div class="row">
                <div>
                    <label class="control-label" for="nome">Nome:</label>
                    <input type="text" class="form-control" name="nome" id="nome" v-model="name" placeholder="nome">
                </div>
                <div>
                    <label class="control-label" for="cognome">Cognome:</label>
                    <input type="text" class="form-control" name="cognome" id="cognome" v-model="surname" placeholder="cognome">
                </div>
                <div>
                    <label class="control-label" for="email">Email:</label>
                    <input type="text" class="form-control" name="email" id="email" v-model="mail" placeholder="email">
                </div>
                <div>
                    <label class="control-label" for="telefono">Telefono:</label>
                    <input type="text" class="form-control" name="telefono" id="telefono" v-model="phone" placeholder="telefono">
                </div>
                <div>
                    <label class="control-label" for="indirizzo">Indirizzo:</label>
                    <input type="text" class="form-control" name="indirizzo" id="indirizzo" v-model="address" placeholder="indirizzo">
                </div>
                <div class="mt-4 text-center">
                    <button type="submit" class="send_email">Procedi con il pagamento</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    button{
        background-color: transparent;
        border: 3px solid $primary_color;
        border-radius: 10px;
        padding: 3px 6px;
        color: $primary_color;
        font-weight: bold;
        transition: all 0.25s;
        &:hover{
            background-color: $primary_color;
            color: white;
        }
    }
</style>