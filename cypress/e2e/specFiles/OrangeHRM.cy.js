/// <reference types="cypress"/>

describe('First Test', function(){

    it('Test Automation', function(){

        cy.visit({url: 'https://opensource-demo.orangehrmlive.com/'})
        cy.get('[name="txtUsername"]').type('Admin')
        cy.xpath('//input[@name="txtPassword"]').type('admin123')
        cy.get('input#btnLogin').click()

    })

})