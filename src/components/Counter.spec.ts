import Counter from './Counter.vue'
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import { mount } from '@cypress/vue/dist';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Counter', () => {
  let state = {
    counter: 0
  };
  let store: any;
  let wrapper: any;
  let actions = {
    decrement: (state: any) => state.counter--,
    increment: (state: any) => state.counter++,
  }
  store = new Vuex.Store({
    state,
    getters : {
      counter: () => 0,
    },
    actions
  });
  beforeEach(() => {
    wrapper = shallowMount(Counter, {
      store,
      localVue
    });
  });

  it('Increment counter', () => {
    wrapper = shallowMount(Counter, {
      store,
      localVue
    });
    cy.get('button').click()
    cy.get('h1').should('have.text', Counter)
  })

})