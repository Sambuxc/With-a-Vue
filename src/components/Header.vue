<script>
export default {
  name: 'HelloWorld',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
    <h3>
      A personal project for learning Vue and integrating with innovative external APIs.
    </h3>
  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
