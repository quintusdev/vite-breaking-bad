<script>
/* importo lo store dal file store.js */
import { store } from '../store';

export default {
    data() {
        return {
            store,
            /* array tipologie pokemon */
            typePoke:[
                "Bug",
                "Dark",
                "Dragon",
                "Electric",
                "Fairy",
                "Fighting",
                "Fire",
                "Flying",
                "Ghost",
                "Grass",
                "Ground",
                "Ice",
                "Normal",
                "Poison",
                "Psychic",
                "Rock",
                "Steel",
                "Water"
            ]
        }
    },  
}
</script>

<template>
    <div class="filtro">
        <select name="filtro" id="filtro" class="form-control me-2" v-model="store.typeValue">
            <option value="" selected>Seleziona Filtro</option>
            <option v-for="(type, index) in typePoke" :key="index" :value="type">{{ type }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    
</style>