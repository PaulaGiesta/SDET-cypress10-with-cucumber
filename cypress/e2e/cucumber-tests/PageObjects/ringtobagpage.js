
const CLASSICRING = 'DB Classic radiant cut diamond ring in platinum'
const CLASSICRINGFR = 'Solitaire DB Classic taille radiant'
const CARATSLIDER = 'div[id="carat-slider-range"]'
const SELECTSIZE = 'select[name="sizeRefinement"]'
const ADDTOBAGBUTTON = 'div[data-pid="R103607-52-G-1.01-VVS2"]'
const VERIFYBAGNOTEMPTY = 'span[class="minicart-quantity not-empty"]'

class RingToBagPage {
  
    static viewRingDetails() {
        cy.contains('div',CLASSICRING).invoke('show').scrollIntoView().click({force: true});
        cy.contains('div',CLASSICRING).closest("div:visible").should('be.visible');
        //ring details
        cy.contains('p', 'Carat').scrollIntoView().should('be.visible');
        cy.contains('span', 'Clarity').scrollIntoView().should('be.visible');
        cy.contains('span', 'Colour').scrollIntoView().should('be.visible');
        cy.contains('p', 'Ring Size').scrollIntoView().should('be.visible');
        cy.contains('p', 'Price').scrollIntoView().closest("div:visible").should('be.visible');
     
    }

    static viewRingDetailsFR() {
        cy.contains('div',CLASSICRINGFR).invoke('show').scrollIntoView().click({force: true});
        cy.contains('div',CLASSICRINGFR).closest("div:visible").should('be.visible');
        //ring details
        cy.contains('p', 'Carat').scrollIntoView().should('be.visible');
        cy.contains('span', 'Clarté').scrollIntoView().should('be.visible');
        cy.contains('span', 'Couleur').scrollIntoView().should('be.visible');
        cy.contains('p', 'Taille De Bague').scrollIntoView().should('be.visible');
        cy.contains('p', 'Prix').scrollIntoView().closest("div:visible").should('be.visible');
     
    }

    static personaliseRing() {

        cy.get(CARATSLIDER).as('range')
          .scrollIntoView().invoke('val', "1,1.01")
          .trigger('change', {force: true}) //force true because scrollIntoView is not working

        cy.get('@range').should('have.value', '1,1.01')

         //force true because element is being covered 
        cy.contains('button', 'VVS2').click({force: true})
  
         //force true because element is not visible because it has CSS property: display: none
        cy.get(SELECTSIZE).select('52',{force: true})
   
    }

    static addToShoppingBag() {

        cy.url().then(($url) => {
            if($url.includes('fr-fr')) {
        cy.get(ADDTOBAGBUTTON).find('button').contains('Ajouter au panier').should('be.enabled').click({force: true});
            }
            else cy.get(ADDTOBAGBUTTON).find('button').contains('Add to Bag').should('be.enabled').click({force: true});
        });
        cy.get(VERIFYBAGNOTEMPTY).should('be.visible')
    }

}
  export default RingToBagPage
  