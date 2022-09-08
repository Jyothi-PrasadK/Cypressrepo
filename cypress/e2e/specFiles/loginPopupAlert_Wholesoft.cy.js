/// <reference types = "cypress"/>

describe('Wholesoft Login Page', function(){

    it('Check Login popup', function(){

        cy.visit('https://dev.wholesoftmarket.com/login')
        cy.get('#email').type('dtor13_dev@yopmail.com')
        cy.get('#password').type('Testing123$')
        cy.get('button.btn.active').click()
        cy.wait(1000)
        cy.get('div[aria-label="Login successful"]').should('be.visible').should('have.text',' Login successful ')
        cy.wait(5000)
        cy.get('.btn.okButton').contains('CONTINUE').click()
        cy.get('.btn-group').should('contain','David Torres').click()
        cy.xpath('//button[@class="dropdown-item"][2]').contains('Logout').click()
        
    })
})
