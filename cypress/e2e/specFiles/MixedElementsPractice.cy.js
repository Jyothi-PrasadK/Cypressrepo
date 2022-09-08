/// <reference types="cypress"/>


describe('Test Suite', function () {

    it('Mixed Elements - Practice', function () {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#Wikipedia1_wikipedia-search-input').clear().type('Jr NTR')
        cy.get('.wikipedia-search-button').click()
        cy.get('h2').contains('Alert')
        cy.contains('Click Me').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Press a button!')
        })
        cy.get('aside > div > div:nth-child(2) > div > p').should('have.text', 'You pressed OK!')
        cy.get('#datepicker').click()
        cy.xpath('//*[@class="ui-datepicker-calendar"]/tbody').each(($e, index) => {
            var pickDate = $e.text()
            if (pickDate = "13") {
                cy.wrap($e).click()
            }
        })
        cy.get('#speed').find('option').then(e1 => {
            const lth = Cypress.$(e1).length
            expect(e1).have.length(lth)
            cy.log(lth)
        })

        cy.get('#files').find('option').then(ell => {
            const eln = Cypress.$(ell).length
            expect(ell).to.have.length(eln)
            cy.log(eln)
        })

        cy.get('#number').find('option').then((num) => {
            const numln = Cypress.$(num).length
            expect(num).have.length(numln)
            cy.log(numln)
        })
        
        

    })

})