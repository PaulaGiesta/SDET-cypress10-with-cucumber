
const ACCEPTALLCOOKIES = '#onetrust-accept-btn-handler'
const CONTINUETOFRONTPAGE = '#customCountry-continueOn-button'
const CLOSEPOPUP ='button[class="close-modal position-absolute"]'
const DEBEERSHOME = '[title="De Beers Home"]'
const DEBEERSHOMEFR = '[title="De Beers Accueil"]'

class HomePage {
  
    static acceptAllCookiesButton() {
      if (cy.get(ACCEPTALLCOOKIES).isVisible()){
        cy.get(ACCEPTALLCOOKIES).click();
    };
    }
  
    static continueToFrontPageButton() {
      //continuetoFrontPage button is not always present (Italy page dont have), so click if the element exists
      cy.get('body').then($body => {
        if (($body).find(CONTINUETOFRONTPAGE).length) {
         cy.get(CONTINUETOFRONTPAGE).click() }
     });
    }
  
    static closePopUp() {
     //close pop-up button is not visible , so force click 
     cy.get(CLOSEPOPUP).then($el => {
      if (expect($el).to.be.enabled ) cy.get(CLOSEPOPUP).click({force:true}); 
   });
    }

    static verifyPage() {
    cy.get('body').then($body => {
      //in UK and IT cases, same element exists and should be visible
      if (($body).find(DEBEERSHOME).length) {
        cy.get(DEBEERSHOME).should('be.visible'); }
        //in FR case other element is visible 
        else cy.get(DEBEERSHOMEFR).should('be.visible'); 
   });
  }

  static verifyPageRegion (verifyRegion){
  switch (verifyRegion) {
    case 'United Kingdom':
      cy.contains('p','De Beers United Kingdom').should('be.visible');  
      break
    case 'France':
      cy.contains('p','De Beers France ').should('be.visible');    
      break
    case 'Italy':
      cy.contains('p','De Beers Italy ').should('be.visible');  
      break
    default:
      throw new Error()
  }
}
}
  export default HomePage
  