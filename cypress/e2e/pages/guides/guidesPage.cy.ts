import "cypress-real-events/support";

describe("Test Guides Page", () => {
  before(() => {
    cy.visit("/guides");
    cy.wait(1000); // Wait for the page to load completely
  });

  it("Page Elements", () => {
    it("should display study page header", () => {
      cy.contains("h1", "Create a Guide").should("exist");
    });
  });

  it("should display study guides", () => {
    cy.get(".grid.grid-cols-3").children().should("have.length", 5);
  });

  it("should navigate to create study guide view when create button clicked", () => {
    cy.get("button").contains("Create").realClick();
    cy.wait(3000); // Wait for the navigation to complete
    cy.location("pathname").should("include", "/guides/create");
  });
});
