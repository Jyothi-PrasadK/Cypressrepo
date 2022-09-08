describe('File upload', function(){
    it('Uploading using plugin', function(){
        const filePath = 'sampleFile.jpeg'
        cy.visit('https://the-internet.herokuapp.com/')
        cy.title().should('eq', 'The Internet')
        cy.contains('File Upload').click()
        cy.get('#file-upload').attachFile(filePath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('sampleFile.jpeg')
    })
    it('Uploading using selectFile with select method', function(){
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('File Upload').click()
        cy.wait(2000)
        cy.get('#file-upload').selectFile('cypress/fixtures/Capture.JPG')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('Capture.JPG')
    })
    it('Uploading using selectFile with drag-drop method', function(){
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('File Upload').click()
        cy.wait(2000)
        cy.get('#file-upload').selectFile('cypress/fixtures/Capture.JPG', 'cypress\fixtures\sampleFile.jpeg', {action: "drag-drop"})
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('Capture.JPG')
    })
})