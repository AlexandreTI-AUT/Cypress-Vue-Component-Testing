/// <reference types="Cypress" />

describe("App", () => {

    beforeEach(()=>{
        cy.visit("/")
    })

    it("Counter Increment", () => {
        
        cy.get("#btnIncrement").click();
        cy.get("#btnIncrement").click();

        cy.get("#btnIncrement").click();
        cy.get("#btnIncrement").click();

        cy.get("#btnIncrement").click();

        cy.get("#btnIncrement").click();
        cy.get("#btnIncrement").click();

        cy.get("#btnIncrement").click();

        cy.get("#btnIncrement").click();
        cy.get("#btnIncrement").click();


        cy.contains("h1", "Counter: 10");
    });

    it('Counter Decrement', ()=>{

        cy.get("#btnDecrement").click();
        cy.get("#btnDecrement").click();
        cy.get("#btnDecrement").click();
        cy.get("#btnDecrement").click();
        cy.get("#btnDecrement").click();

        cy.contains("h1", "Counter: -5")    

    })

    it('Counter Increment and Decrement', ()=>{

        cy.get("#btnIncrement").click();

        cy.get("#btnDecrement").click();

        cy.contains("h1", "Counter: 0");    

    })
});