

describe('Handling new Tab', function(){

    it('Open a new Tab', function(){

        cy.visit('https://yopmail.com/en/')
        cy.get('.ycptinput').type('abhaya.gupta_wsm {enter}')
        cy.wait(2000)
        cy.get('#ifmail').its('0.contentDocument.body').then(cy.wrap).find('a')
        cy.origin('https://dev.wholesoftmarket.com', ()=>{
            cy.visit('/memberReg/62cfb2a5f35aff002c8a4773')
            cy.get('[ng-reflect-name="email"]').clear().type('abc2gmail.com')
        })
    })
   
})
