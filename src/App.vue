<template>

  <h1>Welcome to My First Vue</h1>
  <Tiny></Tiny>

  <teleport to="#modals" v-if="showModal">

     <Modal  theme="sale" @close="toggleModal">
        <h1>Take a Rest </h1>
        <p>This is a test</p>
     </Modal>

  </teleport>

  <div v-if="showModal2">
    
    <Modal  theme="" @close="toggleModal2">

      <template v-slot:links>
        <h1>Give Away</h1>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>

    </Modal>

  </div>

  <button @click="toggleModal">Open IT!</button>

  <button @click="toggleModal2">Open IT!2</button>

</template>

<script>

import Modal from './components/Modal.vue'
import Tiny from './components/Tiny.vue'

export default {
  name: 'App',
  components: { Modal,Tiny}, 

  data(){
    return{
      showModal:false,
      showModal2:false
    }
  },

  methods :{
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
  #app, #modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1 {
    border-bottom: 1px solid #ddd;

    padding-bottom: 10px;
  }
  button {
    background: #bbb;
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin: 10px;
    font-size: 16px;
    color: #333;
  }
  a{
    color: #333;
    padding: 8px;
    border: 1px solid #9e9e9e;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
</style>