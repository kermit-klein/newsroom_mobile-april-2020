describe("visitor can view all listed articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.visit("/");
  });
  it("articles are shown", () => {
    cy.get("#article-1").should("contain", "title 1");
    cy.get("#article-2").should("contain", "title 2");
  });
  
  it('images are shown', () => {
    cy.get("#article-1").find('image').should('have.attr', 'src').should('include', 'picsum.photos/800/600');
    cy.get("#article-2")..find('image').should('have.attr', 'src').should('include', 'picsum.photos/500/400');

  });
  
});
