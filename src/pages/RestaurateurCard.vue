<script>
import { store } from "../store";

export default {
  props: {
    restaurateur: Object,
  },
  data() {
    return {
      restaurateurs: null,
      store,
    };
  },
};
</script>
<!-- Ciao sono un -->
<template>

    <div class="card" v-if="store.selectedType == null">
        <img class="card__image" :src="restaurateur.image != null ? `${this.store.baseUrl}/storage/${restaurateur.image}` : 'https://picsum.photos/200/300'" alt="">
        <div class="card__content">
            <div class="card-title">
                <h5>Ristorante: {{ restaurateur.name }}</h5>
            </div>
            <p class="card-text">Indirizzo: {{ restaurateur.address }}</p>
            <div>
                <div class="d-flex gap-2 flex-wrap align-items-center">
                    <span>Tag: </span>
                    <span v-for="(tag, index) in restaurateur.types" class="badge bg-info text-white text-uppercase"
                        :key="index">{{ tag.name }}</span>
                </div>
            </div>
            <router-link :to="{ name: 'Plates', params: { slug: restaurateur.slug } }" class="button">Vai ai piatti</router-link>
        </div>
    </div>

    <div class="card" v-else-if="store.selectedType == ''">
        <img class="card__image" :src="restaurateur.image != null ? `${this.store.baseUrl}/storage/${restaurateur.image}` : 'https://picsum.photos/200/300'" alt="">
        <div class="card__content">
            <div class="card-title">
                <h5>Ristorante: {{ restaurateur.name }}</h5>
            </div>
            <p class="card-text">Indirizzo: {{ restaurateur.address }}</p>
            <div>
                <div class="d-flex gap-2 flex-wrap align-items-center">
                    <span>Tag: </span>
                    <span v-for="(tag, index) in restaurateur.types" class="badge bg-info text-white text-uppercase"
                        :key="index">{{ tag.name }}</span>
                </div>
            </div>
            <router-link :to="{ name: 'Plates', params: { slug: restaurateur.slug } }" class="button">Vai ai piatti</router-link>
        </div>
    </div>

    <div class="card" v-else>
        <img class="card__image" :src="restaurateur.image != null ? `${this.store.baseUrl}/storage/${restaurateur.image}` : 'https://picsum.photos/200/300'" alt="">
        <div class="card__content">
            <div class="card-title">
                <h5>Ristorante: {{ restaurateur.name }}</h5>
            </div>
            <p class="card-text">Indirizzo: {{ restaurateur.address }}</p>
            <div>
                <div class="d-flex gap-2 flex-wrap align-items-center">
                    <span>Tag: </span>
                    <span v-for="(tag, index) in restaurateur.types" class="badge bg-info text-white text-uppercase"
                        :key="index">{{ tag }}</span>
                </div>
            </div>
            <router-link :to="{ name: 'Plates', params: { slug: restaurateur.slug } }" class="button">Vai ai piatti</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.button {

    background-color: $primary_color;
    padding: .5em 1em;
    margin: .5em 0em;
    border-radius: .2em;
    text-decoration: none;
    color: #ffffff;
    display: inline-block;

    &:hover {
        background-color: #f86036;
    }
    
}
.cart-link{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

h2,
h4 {
    color: var(--clr-head);
}

h2 {
    font-size: var(--fs-h2);
}

.wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 3em auto;
    padding: 0 2em;
}

.head-title {
    text-align: center;
}

.head-text {
    max-width: 520px;
    margin: auto;
    margin-top: 0.5em;
}

.cards {
    max-width: 100%;
    width: 1100px;
    margin-top: 6em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 6rem;
}

.card {
    display: flex;
    flex-direction: column;
    border-radius: 13px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 300ms ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 10px 15px 50px 0 rgba(0, 0, 0, 0.09);
}

.card__image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
}

.card__content {
    padding: 2em 1.4em;
    background-color: #fff;
}

.card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;
}

.card__price {
    font-size: 2.5rem;
    color: var(--clr-accent);
}

.card__text {
    font-size: 1.4rem;
}
.cart {
    background-color: transparent;
    border: 3px solid $primary_color;
    border-radius: 10px;
    padding: 5px 5px;
    color: $primary_color;
    font-weight: bold;
    transition: all 0.25s;
    display: flex;
    align-items: center;

    i{
        margin: 5px 20px;
        font-size: 25px;
    }

    &:hover {
        background-color: $primary_color;
        color: white;
    }
}
</style>
