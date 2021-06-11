<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Counter",
  computed: {
    ...mapGetters(["counter"]),
  },
  methods: {
    ...mapActions(["decrement", "increment"]),
  },
};
</script>

