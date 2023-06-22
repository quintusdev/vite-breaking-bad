<script>
/* importo lo store dal file store.js */
import { store } from '../store.js';

export default{
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="text-center d-flex justify-content-center px-2 py-2">
        <div class="round green-bkg">
        </div>
        <div class="round blue-bkg">
        </div>
        <div class="round red-bkg">
        </div>
        <div class="round yl-bkg">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .round{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 0 0 3px 2px rgba(0,0,0,0.7);
        margin: 20px 20px;
        border: 1px solid white;
    }

    /* STYLE BACKGROUND */
    .green-bkg{
        background-color: lightgreen;
    }

    .blue-bkg{
        background-color: cornflowerblue;
    }

    .red-bkg{
        background-color: red;
    }

    .yl-bkg{
        background-color: yellow;
    }
</style>