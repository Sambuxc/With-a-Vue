<template>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>

    <div class="post" v-for="post in posts" :key="post.id">
      <p>{{ postById(post.id).text }}</p>
      <h3>Written by {{ userById(postById(post.id).userId).name }}</h3>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive, ref } from 'vue'

const users = ref(sourceData.users)
const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)

function postById (postId) {
  return posts.find(p => p.id === postId)
}
function userById (userId) {
  return users.value.find(u => u.id === userId)
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 15px;
}
</style>
