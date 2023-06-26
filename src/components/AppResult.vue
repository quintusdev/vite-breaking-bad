<script>
/* importo lo store dal file store.js */
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    computed:{
        /* in fondo alla pagina visulizzo il numero di card filtrate */
        resultNumber(){
            return store.pokeList.length;
        }
    }
}
</script>

<template>
    <div class="text-center fw-bold">
        <!-- restituisco in fondo alla pagina Main il risultato -->
        <div id="result" v-if="resultNumber > 0 ">Trovati {{ resultNumber }} Pokemon.</div>
        <div v-else>
            Nessun Pokemon trovato.
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    #result{
        margin: 20px 0;
        color: #fff;
    }
</style>