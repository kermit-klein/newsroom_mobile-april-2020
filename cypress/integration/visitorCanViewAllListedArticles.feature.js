describe("visitor can view all listed articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.viewport("iphone-x");
    cy.visit("/");
  });
  it("articles are shown", () => {
    cy.get("#article-title-1").should("contain", "This is the first title");
    cy.get("#article-title-2").should("contain", "You cannot believe this");
  });

  it("images are shown", () => {
    cy.get("[data-testid=article-image-1]")
      .find("img")
      .should("have.attr", "src")
      .should("include", "picsum.photos/800/600");
    cy.get("[data-testid=article-image-2]")
      .find("img")
      .should("have.attr", "src")
      .should("include", "picsum.photos/500/400");
  });
});
