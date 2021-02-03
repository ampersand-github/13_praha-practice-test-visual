describe("tip_top_tie", function () {
  it("win X", function () {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=square-0]").click();
    cy.get("[data-cy=square-8]").click();
    cy.get("[data-cy=square-1]").click();
    cy.get("[data-cy=square-7]").click();
    cy.get("[data-cy=square-2]").click();
  });
});
