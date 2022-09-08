/// <reference types = "cypress"/>

// import myData from '../../fixtures/accountDropDownData.json'
// import { forEach } from '../../fixtures/accountDropDownData.json'
let accoun_Data = require('../../fixtures/accountDropDownData.json')
describe('Wholesoft Login Page', function () {


    it('Check drop down options', function () {

        cy.visit('https://dev.wholesoftmarket.com/account/signup')
        cy.get('span.ng-tns-c381-0').contains('Account Name').click()
        cy.wait(15000)
        /*cy.get('p-dropdownitem > li > div').each(($ele, i)=>{
            cy.wrap($ele).invoke('text').then((text)=>{
                cy.log(text)
                expect(text).to.equal(accoun_Data.dropdowntext1[i])
                // cy.get('p-dropdownitem').find('img').should('be.visible').and('have.prop','naturalWidth').should('be.greaterThan',0)
            })
        })*/
        cy.get('p-dropdownitem > li > div').each(($ele, i) => {
            cy.log($ele.text())
            expect($ele.text()).to.equal(accoun_Data.dropdowntext1[i])
          })
    })
})

