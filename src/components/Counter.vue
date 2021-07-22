<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button cy-data="button-decrement" id="btnDecrement" @click="decrement">Decrement</button>
    <button cy-data="button-increment" id="btnIncrement" @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from "vuex";
export default Vue.extend({
  name: "Counter",
  computed: {
    ...mapGetters(["counter"]),
  },
  methods: {
    ...mapActions(["decrement", "increment"]),
  },
});
</script>

