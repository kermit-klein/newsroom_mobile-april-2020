describe("User can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/articles",
      response: "fixture:article_list.json",
    });
    cy.viewport("iphone-x");
  });

  describe("successfully", () => {
    beforeEach(() => {
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

    it("logout button is shown", () => {
      cy.get("[data-testid=Logoutbutton]").should("be.visible");
      cy.get("[data-testid=article-1]").should("exist");
    });

    it("clicking the Log out button", () => {
      cy.get("[data-testid=Logoutbutton]").click();
      cy.get("[data-testid=Logoutbutton]").should("not.exist");
      cy.get("[data-testid=Loginbutton]").should("exist");
      cy.get("[data-testid=article-1]").should("exist");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/auth*",
        response: "fixture:unsuccessful_login.json",
        headers: {
          uid: "user@mail.com",
        },
        status: 400,
      });
      cy.visit("/");
      cy.get("[data-testid=Loginbutton]").click();
      cy.get("[data-testid=login-form]").within(() => {
        cy.get("[data-testid=email]").type("user@mail.com");
        cy.get("[data-testid=password]").type("wrongpassword");
        cy.get("[data-testid=submit]").contains("Submit").click();
      });
    });
    it("with invalid credentials", () => {
      cy.get("[data-testid=error-message]").should("exist");
    });
  });
});
