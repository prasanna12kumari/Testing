/// <reference types="Cypress" />
const login_data = require('../fixtures/login_locators.json');
describe(
    'Login and Logout Bynder portal',
    function () {
      beforeEach(function () {
        cy.log("Before each");
      });
  
      it(
        'Login to bynder portal and logout',
        { retries: { runMode: 2, openMode: 2 } },
        function () {
            cy.visit("https://wave-trial.getbynder.com/login/");
            // login
            cy.get(login_data.username_input)
              .clear()
              .type(login_data.username);
            cy.get(login_data.password_input)
              .clear()
              .type(login_data.password);
            cy.get(login_data.login_btn)
              .contains(login_data.login)
              .click();
            // verifying page navigated to account page after successful login
            cy.url().should('include', login_data.account_page_url);
            cy.get(login_data.admin_dropdown)
              .contains(login_data.admin_name)
              .click();
            cy.contains(login_data.logout).click();
            cy.contains(login_data.logout_success_msg);
            cy.url().should('include',login_data.login_url)
        });
      it(
        'Incorrect password',
        { retries: { runMode: 2, openMode: 2 } },
        function () {
            cy.visit("https://wave-trial.getbynder.com/login/");
            // login
            cy.get(login_data.username_input)
              .clear()
              .type(login_data.username);
            cy.get(login_data.password_input)
              .clear()
              .type(login_data.incorrect_pwd);
            cy.get(login_data.login_btn)
              .contains(login_data.login)
              .click();
            // verifying error message
            cy.contains(login_data.incorrect_username_msg);
        });
      it.skip(
        'Empty Username and password',
        { retries: { runMode: 2, openMode: 2 } },
        function () {
            cy.visit("https://wave-trial.getbynder.com/login/");
            // login
            // cy.get(login_data.username_input)
            //   .clear()
            //   .type(login_data.incorrect_username);
            // cy.get(login_data.password_input)
            //   .clear()
            //   .type(login_data.incorrect_pwd);
            cy.get(login_data.login_btn)
              .contains(login_data.login)
              .click();
            // verifying error message
            cy.contains(login_data.empty_pwd_error_msg);
        });
      it(
        'Verify Lost password page navigation',
        { retries: { runMode: 2, openMode: 2 } },
        function () {
            cy.visit("https://wave-trial.getbynder.com/login/");
            cy.get(login_data.lost_pwd_link)
              .click();
            // verifying navigation to reset password page
            cy.url().should('include',login_data.lost_pwd_page_url);
            cy.contains(login_data.reset_pwd);
            cy.contains(login_data.security_check);
            cy.get(login_data.send_instructions_btn).should('be.enabled');
            // Click cancel button
            // @ts-ignore
            cy.get(login_data.cancel_btn).contains('Cancel').click();
            // Verify redirected to login page
            cy.url().should('include',login_data.login_url)

            

        });
    });