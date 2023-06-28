<script>
/* importo lo store dal file store.js */
import { store } from '../store.js';

export default{
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
    <div class="container">
        <div class="row">
            <div class="text-center d-flex justify-content-start px-5 py-4 col-8">
                <div class="round blue-bkg"></div>
                <div class="round green-bkg"></div>
                <div class="round red-bkg"></div>
                <div class="round yl-bkg"></div>
            </div>
            <div class="col-4 d-flex justify-content-end px-5 py-5">
                <select name="filtro" id="filtro" class="form-control" v-model="store.typeValue" @change="$emit('typeChange')">
                    <option value="" selected>Seleziona Filtro</option>
                    <!-- questo V-FOR mi permette di inserire gli elementi dell'array nelle option della select -->
                    <option v-for="(type, index) in typePoke" :key="index" :value="type">{{ type }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .blue-bkg{
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 4px solid white;
        background: rgb(0,45,240);
        background: linear-gradient(297deg, rgba(0,45,240,1) 28%, rgba(255,255,255,1) 100%);
    }

    .yl-bkg, .green-bkg, .red-bkg {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 4px solid white;
    }

    .yl-bkg{
        background: rgb(226,240,0);
        background: linear-gradient(297deg, rgba(226,240,0,1) 28%, rgba(255,255,255,1) 90%);
    }

    .green-bkg{
        background: rgb(12,175,11);
        background: linear-gradient(297deg, rgba(12,175,11,1) 28%, rgba(255,255,255,1) 90%);
    }

    .red-bkg{
        background: rgb(240,0,0);
        background: linear-gradient(297deg, rgba(240,0,0,1) 28%, rgba(255,255,255,1) 90%);
    }
</style>