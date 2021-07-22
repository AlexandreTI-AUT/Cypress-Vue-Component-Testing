<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Counter/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    Counter
  }
});
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
</style>
