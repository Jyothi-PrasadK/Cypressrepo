/// <reference types="cypress"/>

describe('Drag and Drop',function(){

    it('Drag Fried Chicken', function(){

        const dataTransfer = new DataTransfer
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.contains('Fried Chicken').trigger('dragstart',{dataTransfer})
        cy.get('ul#plate-items').trigger('drop',{dataTransfer})

    })

})