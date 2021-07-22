import Counter from '@/components/Counter.vue'
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

  // it("Visits the app root url", () => {
  //   cy.visit("http://localhost:8081");
  // });

  it('Increment counter', () => {
    // cy.get('#btnIncrement').click();
    // mount(Counter, {
    //   store
    // });
    // cy.window().its('store').invoke('counter');
  })

})