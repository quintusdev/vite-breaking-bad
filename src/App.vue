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
    this.getPokemon();
  },
  methods: {
    getPokemon(){
    /* Inserisco l'API url dallo store dentro una variabile */
      let myUrl = store.apiURL;

      if(store.typeValue !== ''){
        myUrl += `?eq[type1]=${store.typeValue}`;
      }

      /* richiamo la funzione axios e inserisco i datiS*/
      axios.get(myUrl).then((response) => {
        store.pokeList = response.data.docs;
        store.loading = false;
      });
    },
  }
}

</script>

<template>
  <div>
    <AppHeader @typeChange="getPokemon" />
    <AppPokeList />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
  

  
</style>
