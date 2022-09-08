
import {signupError} from '../PageObject/ErrorMessages'
import WSM_Elements from '../PageObject/Wholesoft_Elements'

var user_data = require('../../fixtures/userData.json')

describe('Data Driven With Excel', function () {

    user_data.forEach((data) => {

        it('Wholesoft Automation', function () {

            const wsmElements = new WSM_Elements()
            const signupErrorMessage = new signupError()
            
            wsmElements.visitPage('signup')
            wsmElements.firstNameEl().click().type(data.firstName).clear()
            wsmElements.lastNameEl().click().type(data.lastName).clear()
            wsmElements.workEmailEl().click().type(data.email).clear()
            wsmElements.jobTitleEl().select(data.jobTitle).should('be.visible')
            wsmElements.companyNameEl().click().type(data.companyName).clear()
            signupErrorMessage.errorMessage()
            cy.get(wsmElements.submitEl()).then(($elm) => {
                if ($elm.is(":disabled")) {
                  cy.get("body").then(($body) => {
                    if ($body.text().includes(signupErrorMessage.error1)) {
                      throw new Error(signupErrorMessage.error1);
                    } else if ($body.text().includes(signupErrorMessage.error2)) {
                      throw new Error(signupErrorMessage.error2);
                    } else if ($body.text().includes(signupErrorMessage.error3)) {
                      throw new Error(signupErrorMessage.error3);
                    } else if ($body.text().includes(signupErrorMessage.error4)) {
                      throw new Error(signupErrorMessage.error4);
                    } else if ($body.text().includes(signupErrorMessage.error5)) {
                      throw new Error(signupErrorMessage.error5);
                    } else {
                      throw new Error(signupErrorMessage.error6);
                    }
                  });
                } else {
                  cy.log(signupErrorMessage.success);
                }
              });       
        })
    })
})