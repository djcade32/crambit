describe("Toggle Theme", () => {
  beforeEach(() => {
    cy.visit("/");

    // Set the initial theme to light for testing
    cy.document().then(() => {
      localStorage.setItem("theme", "light");
    });
    cy.wait(1000); // Wait for the page to load completely
  });

  describe("Theme Button", () => {
    it("shows the correct icon based on theme", () => {
      // Initially, the theme should be light
      cy.get('[data-testid="icon-sun"]').should("exist");
      cy.get('[data-testid="icon-moon"]').should("not.exist");

      cy.get('[data-testid="theme-button"]').click();

      // After clicking, the theme should change to dark
      cy.get('[data-testid="icon-moon"]').should("exist");
      cy.get('[data-testid="icon-sun"]').should("not.exist");
    });

    it("toggles from light to dark and shows the correct icon", () => {
      cy.get('[data-testid="theme-button"]').click();

      cy.get("html").should("have.class", "dark");
      cy.get('[data-testid="icon-moon"]').should("exist");
      cy.get('[data-testid="icon-sun"]').should("not.exist");
    });
  });

  describe("UI Changes", () => {
    it("changes background and text color on theme toggle", () => {
      // Check initial background color for light theme
      cy.get("html").should("not.have.class", "dark");
      cy.get("body").should("have.css", "background-color", "rgb(249, 250, 251)");
      cy.contains("Home").should("have.css", "color", "rgb(23, 23, 23)");

      // Click the theme button to toggle to dark theme
      cy.get('[data-testid="theme-button"]').click();

      // Check background color for dark theme
      cy.get("html").should("have.class", "dark");
      cy.get("body").should("have.css", "background-color", "rgb(23, 23, 23)");
      cy.contains("Home").should("have.css", "color", "rgb(249, 250, 251)");
    });
  });
});
