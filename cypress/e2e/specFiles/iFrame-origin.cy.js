
describe('Handling new Tab', function () {

    it('Open a new Tab using cy.origin()', function () {

        let link;
        cy.visit('https://yopmail.com/en/')
        cy.get('.ycptinput').type('abhaya.gupta_wsm{enter}')
        cy.wait(2000)
        cy.get('#ifmail').its('0.contentDocument.body').then($body => {
                link = $body.find('a')[0].href
            })
        cy.then(() => {          // this just waits for above block to complete
            const newOrigin = link.split('?')[0]  // remove query params 
                .replace('http://', 'https://')   // correct for secure protocol
            cy.origin(newOrigin, { args: { link } }, ({ link }) => {
                cy.visit(link)       // same as ".find('a').click()" but works cross-domain
                cy.get('[ng-reflect-name="password"]').type('Hello@123')
            })
        })

    })
})
