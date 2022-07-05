import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import WedRingsPage from './PageObjects/wedringspage.js'
import RingToBagPage from './PageObjects/ringtobagpage.js'
import OrderDetailsPage from './PageObjects/orderdetailspage.js'

 //Us2Ac1
When('I view all available Engagement Rings', ()=> {
  
   WedRingsPage.viewAllRings();
    
});

 //Us2Ac1
Then('I should be able to filter the product by all Available Filters', ()=> {
   cy.url().then(($url) => {
        if($url.includes('fr-fr')) {
            WedRingsPage.applyFilterFR("MÉTAL"); 
            cy.contains('a','Supprimer').click();
            WedRingsPage.applyFilterFR("Taille");
            cy.contains('a','Supprimer').click();
            WedRingsPage.applyFilterFR("TAILLE DE DIAMANT");
            cy.contains('a','Supprimer').click();
            cy.contains('span','PRIX').click();
            WedRingsPage.applyFilterPrice();

     } else  {
            WedRingsPage.applyFilter("Material");
            cy.contains('a','Clear All').click();
            WedRingsPage.applyFilter("Size");
            cy.contains('a','Clear All').click();
            WedRingsPage.applyFilter("Cut");
            cy.contains('a','Clear All').click();
            cy.contains('span','Price').click();
            WedRingsPage.applyFilterPrice();
      }
    })
});

//Us2Ac2
When('I view the details of a ring', ()=> {

    WedRingsPage.viewAllRings();
    
    cy.url().then(($url) => {
        if($url.includes('fr-fr')) {
            RingToBagPage.viewRingDetailsFR();
   
     } else  {
        RingToBagPage.viewRingDetails();
      }
    })
});

//Us2Ac2
Then('I should be be able to personalise the ring on and add it to the shopping bag', ()=> {
   
     RingToBagPage.personaliseRing();
     RingToBagPage.addToShoppingBag();

});

//Us2Ac3
When('I add an engagement ring to the shopping bag', ()=> {
    WedRingsPage.viewAllRings();
    
    cy.url().then(($url) => {
        if($url.includes('fr-fr')) {
            RingToBagPage.viewRingDetailsFR();
     } else  {
        RingToBagPage.viewRingDetails();
      }
    });
    RingToBagPage.personaliseRing();
    RingToBagPage.addToShoppingBag();
});

//Us2Ac3
Then('I should be able to place an order for the ring', ()=> { 
    OrderDetailsPage.secureCheckout();
    OrderDetailsPage.placeOrder();
});