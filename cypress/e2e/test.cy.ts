describe("Testing Cypress", () => {
  before(() => {
    cy.visit("/");
  });

  it("should show Crambit", () => {
    cy.get("p").contains("Hello World");
  });
});
