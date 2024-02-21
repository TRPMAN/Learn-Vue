<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 Age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {

    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'MAN'
      age.value = 300
    }

    return { name, age, handleClick }
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
