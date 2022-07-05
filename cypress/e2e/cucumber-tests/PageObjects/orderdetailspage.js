const SHOPPINGBAG = '#headerShoppingBag'
const EMAIL = '#login-form-email'
const SUBMITGUEST = '#submitGuestCustomer'
const TITLE = '#customerTitle'
const FIRSTNAME = '#shippingFirstName'
const LASTNAME = '#shippingLastName'
const MOBILE = '#accountMobilePhoneNumber'
const ADDRESS = '#shippingAddressOne'
const CITY = '#shippingAddressCity'
const POSTALCODE = '#shippingZipCode'

class OrderDetailsPage {
  
    static secureCheckout() {
        cy.get(SHOPPINGBAG).click({force:true});
        cy.url().then(($url) => {
            if($url.includes('fr-fr')) {
                cy.contains('span', 'Paiement sécurisé').click()
            }
            else cy.contains('span', 'Secure Checkout').click()
        });
    }

    static placeOrder() {

    cy.fixture('orderdetails.json').then((orderData)=>{
       cy.get(EMAIL).realType(orderData.email)
       cy.get(SUBMITGUEST).click()
       cy.get(TITLE).select('mr.',{force: true})
       cy.get(FIRSTNAME).realType(orderData.firstname)
       cy.get(LASTNAME).realType(orderData.lastname)
       cy.get(MOBILE).realType(orderData.mobile)
       cy.get(ADDRESS).realType(orderData.address)
       cy.get(CITY).realType(orderData.city)
       cy.get(POSTALCODE).realType(orderData.postalcode)

       cy.url().then(($url) => {
        if($url.includes('fr-fr')) {
            cy.contains('button', 'Continuer vers paiement').click({force: true})
        }
        else cy.contains('button', 'CONTINUE TO PAYMENT').click({force: true})
    });
      
      //cy.get('#encryptedCardNumber').type('1234 5667 9902 2222',{force:true})
      //cy.xpath('span',"//*[contains(text(),'Numéro de carte non valide') or contains(text(),'Unsupported card entered')]").invoke('show').should('be.visible')
        });
    }
}
  export default OrderDetailsPage
  