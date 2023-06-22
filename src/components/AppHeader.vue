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
    <div class="text-center">
        <h1>{{store.titleApp}}</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

</style>