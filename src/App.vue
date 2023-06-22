<script>
/* importo l'Axios */
import axios from 'axios';
/* importo lo store dal file store.js */
import { store } from './store.js';

import AppHeader from './components/AppHeader.vue';
import AppPokeList from './components/AppPokeList.vue';

export default{
  components:{
    AppHeader,
    AppPokeList
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
      store.pokeList = response.data.docs;
    })
  },
}
</script>

<template>
  <div>
    <AppHeader />
    <AppPokeList />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;

  
</style>
