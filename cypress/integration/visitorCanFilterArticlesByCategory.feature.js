describe("Visitor can select category all", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_category_list.json",
    });
    cy.viewport("samsung-s10");
    cy.visit("/");
  });

  it("and sees all articles", () => {
    cy.contains("Category").click();
    cy.get("div").contains("All").click();
    cy.get("#article-title-1").should("be.visible");
    cy.get("#article-title-2").should("be.visible");
    cy.get("#article-title-3").scrollIntoView().should("be.visible");
    cy.get("#article-title-4").should("be.visible");
    cy.get("#article-title-5").should("be.visible");
  });
});

describe("Visitor can filter by category", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_economy_cat_list.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_other_cat_list.json",
    });
    cy.viewport("iphone-x");
    cy.visit("/");
  });

  it("economy category successfully", () => {
    cy.contains("Category").click();
    cy.get("div").contains("Economy").click();
    cy.get("#article-title-1").should("be.visible");
    cy.get("#article-title-2").should("be.visible");
    cy.get("#article-title-3").scrollIntoView().should("be.visible");
    cy.get("#article-title-4").should("be.visible");
    cy.get("#article-title-5").should("be.visible");
  });

  it("other category successfully", () => {
    cy.contains("Category").click();
    cy.get("div").contains("Other").click();
    cy.get("#article-title-1").should("be.visible");
    cy.get("#article-title-2").should("be.visible");
    cy.get("#article-title-3").scrollIntoView().should("be.visible");
    cy.get("#article-title-4").should("be.visible");
    cy.get("#article-title-5").should("be.visible");
  });
});
