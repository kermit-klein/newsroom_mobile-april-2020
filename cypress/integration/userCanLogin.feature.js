describe("User can login", () => {
  beforeEach(() => {
    cy.server();
    cy.viewport("iphone-x");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "GET",
        url: "**/articles",
        response: "fixture:article_list.json",
      });
      cy.route({
        method: "POST",
        url: "**/auth/*",
        response: "fixture:successful_login.json",
        headers: {
          uid: "user@mail.com",
        },
      });
      cy.route({
        method: "GET",
        url: "**/auth/*",
        response: "fixture:successful_login.json",
        headers: {
          uid: "user@mail.com",
        },
      });
      cy.route({
        method: "DELETE",
        url: "http://localhost:3000/api/auth/*",
        response: "fixture:logout.json",
        headers: {
          uid: "user@mail.com",
        },
      });
      cy.visit("/");
      cy.get("button#login").click();
      cy.get("#login-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("password");
        cy.get("Button#submit").contains("Submit").click();
      });
    });

    it("and is directed to main page", () => {
      cy.get("#article-1").should("contain", "title 1");
    });

    it("with valid credentials", () => {
      cy.get("div#login").within(() => {
        cy.get("p").should("contain", "user@mail.com");
      });
    });

    it("clicking the Log out button", () => {
      cy.get("#logout").click();
      cy.get("#logout").should("not.exist");
      expect("#article-1").to.exist;
    });
  });
});
