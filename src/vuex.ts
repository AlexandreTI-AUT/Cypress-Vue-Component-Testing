import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //Estado de cada atributo
    counter: 0,
  },
  mutations: {
    //mutation, basicamente são os métodos responsaveis
    decrement: (state) => state.counter--,
    increment: (state) => state.counter++,
  },
  getters: {
    // Métodos para realizar coisas complexas
    counter: (state) => state.counter,
  },
  actions: {
    //Action, chamadas paras funções assincronas
    // Essas ações varias coisas, quando termina, realiza o 'commit' que chama a mutação.
    decrement: ({ commit }) => commit("decrement"),
    increment: ({ commit }) => commit("increment"),
  },
});

export { store };