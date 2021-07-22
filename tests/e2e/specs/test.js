describe("App", () => {
    it("Visits the app root url", () => {
        cy.visit("http://localhost:8081");
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
});