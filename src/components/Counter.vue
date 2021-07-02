<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button cy-data="button-decrement" id="btnDecrement" @click="decrement">Decrement</button>
    <button cy-data="button-increment" id="btnIncrement" @click="increment">Increment</button>
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

