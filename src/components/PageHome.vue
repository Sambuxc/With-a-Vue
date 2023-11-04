<template>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>

    <div class="post" v-for="post in posts" :key="post.id">
      <p>{{ postById(post.id).text }}</p>
      <h3>Written by {{ userById(postById(post.id).userId).name }}</h3>
    </div>
  </div>
</template>

<script>
import sourceData from '../data.json'

export default {
  name: 'PageHome',
  data () {
    return {
      users: sourceData.users,
      threads: sourceData.threads,
      posts: sourceData.posts
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 15px;
}
</style>
