<script>
/* importo il file pokemon card */
import AppPokeCard from './AppPokeCard.vue';
import AppLoader from './AppLoader.vue';
/* importo lo store dal file store.js */
import { store } from '../store';

export default {
    components:{
        AppPokeCard,
        AppLoader
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
        <div class="container bg-secondary bg-gradient px-5 py-4 mb-5">
            <div class="row d-flex justify-content-center overflow-auto h" v-if="store.loading === false">
                <!-- Creo un V-FOR per inserire le card all'interno del contenitore  -->
                <div v-for="(pokemon, index) in store.pokeList" :key="index" class="d-flex col-6 col-md-4 col-lg-3 min">
                    <AppPokeCard :myPokemon="pokemon"/>
                </div>
            </div>
            <AppLoader v-else/>
        </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .min{
        min-width: fit-content;
    }

    .h{
        height: 620px;
    }
</style>


