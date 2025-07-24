describe("Test Studying Page", () => {
  before(() => {
    cy.visit("/study");
    cy.wait(1000); // Wait for the page to load completely
  });

  it("Page Elements", () => {
    it("should display study page header", () => {
      cy.contains("h1", "Choose a guide to start studying").should("exist");
    });
  });

  it("should display study guides", () => {
    cy.get(".grid.grid-cols-3").children().should("have.length", 5);
  });

  it("should navigate to a studying guide view when clicked", () => {
    cy.get(".grid.grid-cols-3").children().first().find("button").contains("Start").click();

    cy.location("pathname").should("include", "/study/");
  });
});
