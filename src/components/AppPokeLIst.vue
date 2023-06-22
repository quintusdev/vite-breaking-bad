<script>
/* importo il file pokemon card */
import AppPokeCard from './AppPokeCard.vue';
/* importo lo store dal file store.js */
import { store } from '../store';

export default {
    components:{
        AppPokeCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
        <div class="container bg-danger px-5 py-4">
            <div class="row d-flex justify-content-center p-4">
                <div v-for="(pokemon, index) in store.pokeList" :key="index" class="d-flex justify-content-center col-6 col-md-4 col-lg-2 mx-2">
                    <AppPokeCard :myPokemon="pokemon"/>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

/* .row{
    width: 70%;
    margin: 0 auto;
    background-color: lightgray;
    border-radius: 30px;
} */
</style>
