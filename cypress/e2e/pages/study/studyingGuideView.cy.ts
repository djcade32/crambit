import { getElementByDataTestId } from "../../../utils";

describe("Test Studying Guide View", () => {
  before(() => {
    cy.visit("/study/1");
    cy.wait(1000); // Wait for the page to load completely
  });

  describe("Page Elements", () => {
    it("should display the study guide title", () => {
      getElementByDataTestId("study-guide-title").should("exist");
    });

    it("should display the question section", () => {
      getElementByDataTestId("question-section").should("exist");
    });

    it("should not display the answer section", () => {
      getElementByDataTestId("answer-section").should("not.exist");
    });

    it("should display the exit button", () => {
      getElementByDataTestId("exit-button").should("exist");
    });

    it("should display the next and previous buttons", () => {
      getElementByDataTestId("next-button").should("exist");
      getElementByDataTestId("prev-button").should("not.exist");
    });
  });

  describe("Test Navigating Page", () => {
    it("should show answer when toggle button is clicked", () => {
      getElementByDataTestId("show-answer-button").click();
      getElementByDataTestId("answer-section").should("exist");
    });

    it("should hide answer when toggle button is clicked again", () => {
      getElementByDataTestId("show-answer-button").click();
      getElementByDataTestId("answer-section").should("not.exist");
    });

    it("should navigate to the next question when next button is clicked", () => {
      getElementByDataTestId("question-section")
        .invoke("text")
        .then((firstText) => {
          getElementByDataTestId("next-button").click();

          getElementByDataTestId("question-section").should("not.have.text", firstText);
        });

      getElementByDataTestId("prev-button").should("exist");
    });

    it("should navigate to the previous question when prev button is clicked", () => {
      getElementByDataTestId("question-section")
        .invoke("text")
        .then((firstText) => {
          getElementByDataTestId("prev-button").click();

          getElementByDataTestId("question-section").should("not.have.text", firstText);
        });
    });

    it("should navigate to the study page when exit button is clicked", () => {
      getElementByDataTestId("exit-button").click();
      cy.location("pathname").should("eq", "/study");
    });
  });
});
