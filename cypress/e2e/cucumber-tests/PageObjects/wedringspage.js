import HomePage from './homepage.js'

const WEDDINGSECTION = '#G10002'
const PRICESLIDER = 'input[id="priceSlider"]'
const filters = [{'value': 'Material'},{'value': 'Size'}, {'value': 'Cut'}, {'value': 'Price'} ]
const filtersFr = [{'value': 'MÉTAL'},{'value': 'Taille'}, {'value': 'TAILLE DE DIAMANT'}, {'value': 'PRIX'} ]
const IdsSelector = [{'material':"div[id='Platinum']"},{'material':"div[id='White Gold']"}, {'material':"div[id='Yellow Gold']"},{'material':"div[id='Rose Gold']"},{'size':"div[id='45']"}, {'size':"div[id='46']"},{'size':"div[id='47']"}, {'size':"div[id='48']"},{'size':"div[id='49']"},{'size':"div[id='50']"}, {'size':"div[id='51']"},{'size':"div[id='52']"},{'size':"div[id='53']"},{'size':"div[id='54']"}, {'size':"div[id='55']"}, {'size':"div[id='56']"}, {'size':"div[id='57']"}, {'cut':"div[id='Asscher']"},{'cut':"div[id='Cushion']"},{'cut':"div[id='Emerald']"},{'cut':"div[id='Heart']"},{'cut':"div[id='Pear']"},{'cut':"div[id='Oval']"}]
const IdsSelectorFr = [{'MÉTAL':"div[id='Platine']"},{'MÉTAL':"div[id='Or Blanc']"}, {'MÉTAL':"div[id='Or Jaune']"},{'MÉTAL':"div[id='Or Rose']"},{'Taille':"div[id='45']"}, {'Taille':"div[id='46']"},{'Taille':"div[id='47']"}, {'Taille':"div[id='48']"},{'Taille':"div[id='52']"},{'Taille':"div[id='53']"},{'Taille':"div[id='54']"}, {'Taille':"div[id='55']"},{'TAILLE DE DIAMANT':"div[id='Asscher']"},{'TAILLE DE DIAMANT':"div[id='Coussin']"},{'TAILLE DE DIAMANT':"div[id='Émeraude']"},{'TAILLE DE DIAMANT':"div[id='Cœur']"},{'TAILLE DE DIAMANT':"div[id='Poire']"}]


class WedRingsPage {
  
    static viewAllRings() {
        HomePage.acceptAllCookiesButton();
        HomePage.continueToFrontPageButton();
        HomePage.closePopUp();
        cy.get(WEDDINGSECTION).click();
        cy.url().then(($url) => {
            if($url.includes('fr-fr')) {
                cy.contains('a', 'Bagues de fiançailles').invoke('show').click();
                cy.contains('span',' résultats').invoke('text').then(parseFloat).should('be.gt', 0);
         } else  {
            //invoke to show the element to perform action
            cy.contains('a', 'Engagement rings').invoke('show').click();
            cy.contains('span',' Results').invoke('text').then(parseFloat).should('be.gt', 0);
          }
    })
    }

  
    static applyFilterFR(val) {
            filtersFr.forEach((filterfr) => {
                 if (filterfr.value === val) {
                    IdsSelectorFr.forEach((Ids) => {
                    if (Ids[val]) {
                        cy.contains('span',filterfr.value).should('be.visible').click();
                        //after clicking , verify subfilter is applied (results less than 100)
                        cy.get(Ids[val]).click({force:true}); 
                        cy.contains('span',filterfr.value).should('be.visible').click();
                        cy.contains('span',' résultat').invoke('text').then(parseFloat).should('be.lt', 100);
                                }
                          })
                        }
                      })
      
}

    static applyFilter(val) {
        filters.forEach((filter) => {
            if (filter.value === val) {
                IdsSelector.forEach((Ids) => {
                    let vals = val.toLowerCase();
                    if (Ids[vals]) {
                        cy.contains('span',filter.value).should('be.visible').click();
                        //after clicking , verify subfilter is applied (results less than 100)
                        cy.get(Ids[vals]).click({force:true}); 
                        cy.contains('span',filter.value).should('be.visible').click();
                        cy.contains('span','Result').invoke('text').then(parseFloat).should('be.lt', 100);

                    }
                
              })
            }
          })
      }

      static applyFilterPrice() {
    
      cy.get(PRICESLIDER).as('range')
         .scrollIntoView().invoke('val', "1680,44360")
         .trigger('change', {force: true}) //force true because scrollIntoView is not working

        cy.get('@range').should('have.value', '1680,44360')

  }
    
}
  export default WedRingsPage
  