/// <reference types="cypress"/>

import testdata from '../../fixtures/testdata.json'
describe('Example to demonstrate the use `each` in Cypress', function () {
    const loginPage = (username, password) => {
        cy.session([username, password], () => {
            cy.visit(Cypress.env('orangeurl')) // baseUrl: "https://opensource-demo.orangehrmlive.com/"
            cy.get('[name="username"]').type(username)
            cy.get('[name="password"]').type(password)
            cy.contains('Login').click()
        })
    }
    beforeEach('Loading test data', function () {
        loginPage(testdata.username, testdata.password)
    })
    it('Validating the Quick Launch menu', function () {
        cy.visit(Cypress.env('orangeurl')+'/index.php/dashboard')
        cy.get('.quickLaunge').each(($el, index) => {
            expect($el).to.contain(testdata.quickLaunch[index])
        })
    })
    it('Opening My Leave List', function(){
        cy.visit(Cypress.env('orangeurl')+'/index.php/leave/viewMyLeaveList')
        cy.get('#calFromDate').type('2022-07-20')
    })
})

/* describe('Example to demonstrate the use `each` in Cypress', function () {
    const loginPage = (username, password) => {
        const setup = () => {
            cy.visit('/') // baseUrl: "https://opensource-demo.orangehrmlive.com/"
            cy.get('#txtUsername').type(username)
            cy.get('#txtPassword').type(password)
            cy.get('#btnLogin').click()
        }
        const validate = () => {
            cy.getCookie(testdata.cookieName).should('exist')
        }
        cy.session([username, password], setup, { validate })
    }
    beforeEach('Loading test data', function () {
        loginPage(testdata.username, testdata.password)
    })
    it('Validating the Quick Launch menu', function () {
        cy.visit('/index.php/dashboard')
        cy.get('.quickLaunge').each(($el, index) => {
            expect($el).to.contain(testdata.quickLaunch[index])
        })
    })
}) */