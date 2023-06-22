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
    <div class="d-flex text-center card my-4 align-items-center" :class="myPokemon.type1 === 'Grass' ? 'green-bkg' : myPokemon.type1 === 'Water' ? 'blue-bkg' : myPokemon.type1 === 'Fire' ? 'red-bkg' : ''">
        <img class="m-3" :src="myPokemon.imageUrl" alt="pokemon.name">
        <h6 class="mt-2 mb-1"> {{ myPokemon.number }}</h6>   
        <h5 class="mt-2 mb-1"> {{ myPokemon.name }}</h5>
        <h6 class="mt-2 mb-1"> {{ myPokemon.type1 }}</h6>
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
        font-size: 18px;
        font-weight: 700;
    }

    h6{
        font-size: 15px;
        font-style: italic;
        font-weight: 600;
    }

    /* STYLE BACKGROUND */
    .green-bkg{
        background-color: greenyellow;
    }

    .blue-bkg{
        background-color: cornflowerblue;
    }

    .red-bkg{
        background-color: rgb(247, 41, 41);
    }
</style>