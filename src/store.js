/* Importo il metodo reactive */
import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?',
    pokeList: [],
    loading: true,
    titleApp: 'Pokedex Boolean'
})