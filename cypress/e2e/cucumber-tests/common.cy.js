import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

const URL_UK = "https://www.debeers.co.uk/en-gb/home"
const URL_FR = "https://www.debeers.fr/fr-fr/home"
const URL_IT = "https://www.debeers.com/en-it/home"

Given(/^A user from one of the ([^"]*)$/, (url) => {
    //cy.clearCookies();
    switch (url) {
        case 'United Kingdom':
            cy.visit(URL_UK);
          break
        case 'France':
            cy.visit(URL_FR);
          break
        case 'Italy':
            cy.visit(URL_IT);
          break
        default:
          throw new Error()
      }
    });

