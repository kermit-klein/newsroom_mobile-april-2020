describe("visitor can view a specific article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/1",
      response: "fixture:single_free_article.json",
    });
    cy.viewport("iphone-x");
    cy.visit("/");
  });
  it("article is displayed", () => {
    cy.wait(1000);
    cy.get("[data-testid=article-1]").click();
    // cy.get(".articleCard-1").click();
    // cy.wait(1000);
    cy.get("div#article-1-title").should("contain", "Free title");
    // cy.get("#article-1-date").should("contain", "2020-02-20 02:02");
    // cy.get("#article-1-body").should("contain", "Lorem ipsum");
    // cy.get("#article-1").should("not.exist");
  });
});
