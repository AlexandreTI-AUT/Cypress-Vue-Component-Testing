import { mount } from '@cypress/vue'
import App from './App.vue'
import Vue from 'vue';
import Vuex from 'vuex';
import Counter from "@/components/Counter.vue";
import {store} from "@/vuex";

Vue.use(Vuex);
describe('App', () => {
  let getters : any;
  let store: any;
  beforeEach(() => {
    getters = {
      counter: 0,
    }

  });

  it('renders a message', () => {
    mount(App, {
      components: {
        Counter: {
          store
        }
      },
    })
    cy.get('h1').should('have.text', 'Welcome to Your Vue.js + TypeScript App')
  });

  it("render component Counter", () => {
    mount(Counter, {
      store
    });
  });
})