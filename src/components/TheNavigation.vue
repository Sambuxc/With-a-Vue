<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/thread/1">Threads</RouterLink>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  a.router-link-exact-active {
    color: var(--color-text);
  }

  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  a:first-of-type {
    border: 0;
  }
}
</style>
