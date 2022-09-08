
import { loginError } from "../PageObject/ErrorMessages";
import WSM_Elements from "../PageObject/Wholesoft_Elements";

let user_data = require("../../fixtures/loginPageData.json");
describe("WSM Login Page Test Automation : ", function () {
  const wsmElements = new WSM_Elements();
  const loginErrorMessage = new loginError();

  this.beforeEach(()=>{
    wsmElements.visitPage("login");
  })

  it("Content Test", () => {
    wsmElements.verifyCurrentPageUrl("login");
    wsmElements.verifyBodyText("section1Text");
    wsmElements.verifyBodyText("section2Text");
    wsmElements.verifyBodyText("labelsText");
    wsmElements.verifyPlaceholderText('placeholderText')
    wsmElements.verifyImages();
  });

  it("Data Driven Test", () => {
    user_data.credentials.forEach((data) => {
      // wsmElements.loginWithGoogle().invoke('removeAttr','target').click()
      // wsmElements.loginWithLinkedin().invoke('removeAttr','target').click()
      wsmElements.loginCredEmail().clear().type(data.email)
      wsmElements.loginCredPassword().clear().type(data.password);
        wsmElements.loginButon().should("be.enabled");
        // loginErrorMessage.errorMessage();
      // cy.wait(10000)
      // wsmElements.checkPopUp()
      // wsmElements.verifyCurrentPageUrl('dashboard/member/soc')
      // cy.pause()
      // wsmElements.selectAccountName()
      // wsmElements.verifyCurrentPageUrl('login')
      // wsmElements.logOut().click()
    });
  });
});
