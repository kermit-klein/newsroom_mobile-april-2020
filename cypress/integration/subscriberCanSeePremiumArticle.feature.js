describe("visitor can only view part of premium article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/1",
      response: "fixture:single_free_article.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/2",
      response: "fixture:single_premium_article.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.viewport("iphone-x");
    cy.visit("/");
  });

  it("free article is fully displayed", () => {
    cy.wait(1000);
    cy.get("[data-testid=article-1]").click();
    cy.get("div#article-title-1").should("contain", "Free title");
    cy.get("#article-date-1").should("contain", "2020-02-20 02:02");
    cy.get("#article-body-1").should(
      "contain",
      "Maecenas interdum varius fringilla."
    );
    cy.get("#premium-blocker").should("not.exist");
  });

  it("premium article is only partially displayed", () => {
    cy.wait(1000);
    cy.get("[data-testid=article-2]").click();
    cy.get("div#article-title-2").should("contain", "Premium title");
    cy.get("#article-date-2").should("contain", "2020-02-20 13:37");
    cy.get("#article-body-2").should(
      "not.contain",
      "Maecenas interdum varius fringilla."
    );
    cy.get("[data-testid=premium-blocker]").should("exist");
  });

  it("premium blocker has informative message", () => {
    cy.wait(1000);
    cy.get("[data-testid=article-2]").click();
    cy.get("[data-testid=premium-blocker]").should("contain", "This is a premium article");
  });
});
