/// <reference types = "cypress"/>

describe('Wholesoft Login Page', function () {


    it('Check drop down options', function () {

        var txt
        cy.visit('https://dev.wholesoftmarket.com/account/signup')
        cy.get('label[for="exampleInputEmail1"]').invoke('text').as('labelText')
        cy.get('@labelText').then((txt)=>{
            cy.get('#exampleInputPassword1').type(txt)
        })
        
        // cy.get('#exampleInputPassword1').type()
        // cy.get('span.ng-tns-c381-0').contains('Account Name').should('be.visible').click()
        // cy.wait(15000)
        // cy.xpath('//p-dropdownitem[2]').find('img').should('be.visible').and('have.prop','naturalWidth').should('be.greaterThan',0)
        // cy.xpath('//p-dropdownitem').find('img').should('be.visible').and('have.prop','naturalWidth').should('be.greaterThan',0)

    })
})


/*let accoun_Data = require('../../fixtures/accountDropDownData.json')
describe('Wholesoft Login Page', function () {


    it('Check drop down options', function () {

        cy.visit('https://dev.wholesoftmarket.com/account/signup')
        cy.get('span.ng-tns-c381-0').contains('Account Name').should('be.visible').click()
        cy.wait(15000)
        /*cy.get('p-dropdownitem').each(($ele, i)=>{
            cy.wrap($ele).invoke('attr','ng-reflect-label').then((text)=>{
                expect(text).to.equal(myData.dropdowntext1[i])
                cy.get('p-dropdownitem > li > div > img').should('be.visible').and('have.prop','naturalWidth').should('be.greaterThan',0)
            })
        })*/
        /*cy.get('p-dropdownitem > li > div').each(($ele, i)=>{
            cy.wrap($ele).invoke('text').then((text)=>{
                expect(text).to.equal(accoun_Data.dropdowntext1[i])
                cy.get('p-dropdownitem > li > div > img').should('be.visible').and('have.prop','naturalWidth').should('be.greaterThan',0)
            })
        })
        /*cy.get('div.cdk-virtual-scroll-content-wrapper').find('p-dropdownitem').each(($elm, index, list) => {
            const text = $elm.text()
            accoun_Data.dropdowntext1.forEach((data)=>{
                    cy.log(text)
            })
        })*/
