/* Importo il metodo reactive */
import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
    pokeList: [],
    loading: true,
    typeValue: '',
    mainType: '',
    titleApp: 'Pokedex Boolean 2023',
    colorMap: {
        Bug: '#f8d5a3',
        Dark: '#044286',
        Dragon: '#97b3e6',
        Electric: '#FCF7DE',
        Fairy: '#fceaff',
        Fighting: '#E6E0d4',
        Fire: '#FDDFDF',
        Flying: '#F5F5F5',
        Ghost: '#663388',
        Grass: '#DEFDE0',
        Ground: '#f4e7da',
        Ice: '#DEF3FD',
        Normal: '#F5F5F5',
        Poison: '#98d7a5',
        Psychic: '#eaeda1',
        Rock: '#d5d5d4',
        Steel: 'gray',
        Water: '#DEF3FD'
    }
})