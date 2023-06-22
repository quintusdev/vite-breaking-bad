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
    <div class="pokemon text-center">
        <img :src="myPokemon.imageUrl" alt="Immagine Pokemon">
        <h4 class="mt-2 mb-4"> {{ myPokemon.name }}</h4>        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    
</style>