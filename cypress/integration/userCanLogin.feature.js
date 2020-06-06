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
      cy.wait(1000);
      cy.get("[data-testid=Loginbutton]").click();
      cy.get("[data-testid=login-form]").within(() => {
        cy.get("[data-testid=email]").type("user@mail.com");
        cy.get("[data-testid=password]").type("password");
        cy.get("[data-testid=submit]").contains("Submit").click();
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
  
  describe('unsuccessfully', () => {
    it("with invalid credentials", () => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/auth/*",
        response: "fixture:unsuccessful_login.json",
        headers: {
          uid:"user@mail.com"
        },
        status: 400
      })
      cy.get("#login-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("wrongpassword");
        cy.get('Button').contains('Submit').click()
      });
      cy.get("#error-message").should("contain", "Invalid login credentials. Please try again.");
    });
  })
});
