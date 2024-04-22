<template>
  <div class="home">
    <h1>HOME</h1>
    <div v-if="error">{{ error }}</div>
    <router-link v-if="posts.length" :to="{ name: 'Create'}">Add Blog</router-link>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...
      <Spinner/>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList,Spinner },
  setup() { 
    const {posts, error, load} = getPosts()

    load()
    
    return { posts, error }
  },
}
</script>
<style scoped>
 .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>