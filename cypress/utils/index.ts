export const getElementByDataTestId = (dataTestId: string) =>
  cy.get(`[data-testid="${dataTestId}"]`);
