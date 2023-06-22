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
    <!-- Operatore ternario per impostare lo sfondo della card in base al tipo di pokemon -->
    <div class="d-flex text-center card my-2 p-auto align-items-center" :class="myPokemon.type1 === 'Grass' ? 'green-bkg' : myPokemon.type1 === 'Water' ? 'blue-bkg' : myPokemon.type1 === 'Fire' ? 'red-bkg' : ''">
        <!-- Inserimento contenuti nelle card prendendo gli elementi dalla API -->
        <img class="m-3" :src="myPokemon.imageUrl" alt="pokemon.name">
        <h6> {{ myPokemon.number }}</h6>   
        <h5> {{ myPokemon.name }}</h5>
        <h6> {{ myPokemon.type1 }}</h6>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        box-shadow: 0 0 4px 3px rgba(0,0,0,0.5);
    }

    h5{
        font-size: 20px;
        font-weight: 700;
    }

    h6{
        font-size: 16px;
        font-style: italic;
        font-weight: 600;
    }

    /* STYLE BACKGROUND */
    .green-bkg{
        background-color: rgba(lightgreen, 0.8);
    }

    .blue-bkg{
        background-color:rgba(cornflowerblue, 0.8);
    }

    .red-bkg{
        background-color: rgba(red, 0.8);
    }
</style>