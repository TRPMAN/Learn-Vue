<template>
    <div class="block" v-if="showBlock">
        Click me
    </div>
</template>

<script>
export default {
    props : ['delay'],
    data(){
        return{
            showBlock : false
        }
    },

    mounted() {
        console.log("Component Mounted")
        setTimeout(()=>{
            this.showBlock = true
            console.log(this.delay)
        },this.delay)
    },

    updated(){
        console.log("Component Update")
    },

    unmounted(){
        console.log("unmounted")
    }
}
</script>

<style>
    .block{
        width: 500px;
        border-radius: 20px;
        background: green;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto
    }
</style>

