import { mount } from '@cypress/vue'
import Counter from './Counter.vue'

describe('Counter', () => {
  it('render a message', () => {
    const msg = 'Testando Cypress/Vue'
    mount(Counter, {
      propsData: {
        msg
      }
    })
    cy.get('h2').should('have.text', msg)
  })
})