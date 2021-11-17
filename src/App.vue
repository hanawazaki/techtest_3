<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";

export default {
  components: {
    Navbar,
    Hero,
  },
};
</script>

<template>
  <Navbar />
  <Hero />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
}
</style>
