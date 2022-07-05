import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from './PageObjects/homepage.js'


     When('The user visits the store front', ()=> {

      HomePage.acceptAllCookiesButton();
      HomePage.continueToFrontPageButton();
      HomePage.closePopUp();
      HomePage.verifyPage();

    })

    Then(/^They should be able to view the content related to the ([^"]*)$/, (verifyRegion)=> {
      HomePage.verifyPageRegion(verifyRegion);
        })