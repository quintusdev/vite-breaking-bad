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
    <div class="container">
        <div class="row">
            <div v-for="(pokemon, index) in store.pokeList" :key="index" class="col-6 col-4 col-lg-3">
                <AppPokeCard :myPokemon="pokemon"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container{
    width: 70%;
    margin: 0 auto;
    background-color: lightgray;
    border-radius: 30px;
}
</style>
