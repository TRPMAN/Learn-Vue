<template>
    <p>Reaction Time : {{score}} ms</p>
    <p class="rank">{{rank}}</p>
</template>

<script>
export default {
    props : ['score'],
    data(){
        return{
            rank : null
        }
    },
    mounted(){
        if (this.score < 200){
            this.rank = 'Tenz'
        }
        else if (this.score < 400){
            this.rank = 'Diamond?'
        }
        else{
            this.rank = 'Too Old'
        }
    }
}
</script>

<style>
 .rank{
    font-size : 1.5em;
    color : red;
    font-weight: bold;
 }
</style>