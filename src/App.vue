<script>
/* importo l'Axios */
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppPokeLIst from './components/AppPokeLIst.vue';
/* importo lo store dal file store.js */
import { store } from './store.js';

export default{
  components:{
    AppHeader,
    AppPokeLIst
  },
  data() {
    return {
      /* ora posso utilizzare la pagina store */
      store,
    }
  },
  mounted() {
    /* richiamo la funzione axios e inserisco i datiS*/
    axios.get(store.apiURL).then((response) => {
      store.pokeList = response.data.response
    })
  },
}
</script>

<template>
  <div class="container">
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss" scoped>
  @use './styles/generals.scss' as *;

  
</style>
