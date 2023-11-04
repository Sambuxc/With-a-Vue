<template>
  <div v-for="thread in threads" :key="thread.id">
    <h2 class="thread-title">{{ thread.title }}</h2>

    <div class="post-list">
      <div class="post" v-for="post in posts" :key="post.id">
        <p class="post-content">{{ postById(post.id).text }}</p>
        <h3 class="post-author">Written by {{ userById(postById(post.id).userId).name }}</h3>
      </div>
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
.thread-title {
  margin-top: 18px;
  margin-bottom: 9px;
  font-weight: 700;
  font-size: 3rem;
}

.post-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: masonry;

.post {
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255,255,255,0.1);
  border-radius: 9px;

  &-author {
    font-weight: 600;
    font-size: 12px;
  }

  &-content {
    margin-bottom: 5px;
    max-height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;

    &:hover {
      overflow-y: scroll;
    }
  }
}
}
</style>
