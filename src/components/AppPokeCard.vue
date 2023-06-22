<script>
/* importo lo store dal file store.js */
import { store } from '../store';

export default {
    props:{
        myPokemon: Object
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="text-center card bg-secondary">
        <img :src="myPokemon.imageUrl" alt="pokemon.name">
        <h6 class="mt-2 mb-3"> {{ myPokemon.number }}</h6>   
        <h5 class="mt-2 mb-3"> {{ myPokemon.name }}</h5>
        <h6 class="mt-2 mb-3"> {{ myPokemon.type1 }}</h6>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
</style>