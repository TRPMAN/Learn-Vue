<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Results v-if="showResult" :score="score" :showResults="results"></Results>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {Block,Results},

  data(){
    return{
      isPlaying : false,
      showResult : false,
      delay : null,
      score : null
    }
  },

  methods : {
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResult = false
      // console.log(this.delay)
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResult = true
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  button {
    background: greenyellow;
    color: black;
    padding: 8px 14px;
    letter-spacing: 1px;
    cursor: pointer;
    margin : 11px;
  }
  button[disabled]{
    opacity: 0.2;
    cursor: not-allowed;
  }
</style>
