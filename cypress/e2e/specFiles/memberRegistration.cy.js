/// <reference types="cypress"/>
///<reference types="cypress-iframe" />
import WSM_Elements from "../PageObject/Wholesoft_Elements";

//importing data from json and storing page objects in variables
let memberRegData = require("../../fixtures/userDataMemberReg.json");
let connections = memberRegData.profiles.RuchonFrancois.slice(217, 219);
const wsmElements = new WSM_Elements();

describe.only("Login to SOC Dashboard then invite connections to Eikon", function () {
  const loginTo = (email, password) => {
    // cy.session([email, password], () => {
    cy.visit("/login");
    wsmElements.emailField().clear().type(email);
    wsmElements.passwordField().clear().type(password);
    wsmElements.submitEl().click();
    cy.wait(10000);
    // });
  };
  before(() => {
    loginTo(
      memberRegData.credentials.email,
      memberRegData.credentials.password
    );
    wsmElements.checkPopUp();
    // cy.visit('/dashboard/member/soc')
    // cy.wait(3000)
  });
  connections.forEach((data, index) => {
    it(`${index + 1}) ${data.fullName} : ${data.email}`, () => {
      // cy.visit('/dashboard/member/soc')
      // cy.wait(2500)
      // wsmElements.checkPopUp();
      cy.get("input[placeholder='Search...']").clear({ force: true }).type(data.fullName, { force: true });
      cy.scrollTo('bottom')
      cy.get(".btn-toggle.w-auto").each((elm) => {
        cy.wrap(elm).click({ force: true }).then((elm) => {
          cy.wait(2000)
            cy.get("body").then(($body) => {
              if ($body.find(".account-details.ng-star-inserted").length) {
                memberRegData.profileCategory.forEach((data2) => {
                  if (elm.text().includes(data2.trim())) {
                    cy.log(`${data.fullName} found in ${data2} category`);
                    cy.get("tr td:nth-child(3) input[type='radio']").each((elm) => {
                        cy.wrap(elm).check({ force: true });
                        cy.wait(3000)
                      });
                    wsmElements.invitationStatus(data.email, data.fullName);
                  }
                });
              }
            });
          });
      });
    });
  });
});

/*describe("Go to mailbox and find JOIN EIKON button then go to Eikon registration page", () => {
  before(()=>{
    cy.visit("https://yopmail.com/en/");
  })
  connections.forEach((data, index) => {
    it(`${index + 1}) ${data.fullName} : ${data.email}`, () => {
      cy.get("#login").clear().type(data.email);
      cy.get("button[title='Check Inbox @yopmail.com']").click();
      cy.get(".wminbox").then((inbox) => {
        if (inbox.text().includes("This inbox is empty")) {
          cy.log(`${data.email} has not recieved invitation mail.`);
        } else {
          cy.frameLoaded("#ifinbox");
          cy.iframe("#ifinbox")
            .find("div[currentmail]")
            .contains("WholeSoft Market")
            .click();
          cy.frameLoaded("#ifmail");
          cy.iframe("#ifmail")
            .find("main[class='yscrollbar']")
            .scrollTo("bottom");
          cy.iframe("#ifmail")
            .find("a")
            .each((button) => {
              if (button.text().includes("JOIN EIKON")) {
                const href = button.attr("href");
                cy.log(
                  "Going to member registration page from invitation link in mail"
                );
                Cypress.config("experimentalSessionAndOrigin", true);
                cy.origin(
                  Cypress.env("url"),
                  { args: [href, memberRegData, data] },
                  ([href, memberRegData, data]) => {
                    cy.visit(href);
                    cy.get("input[placeholder='Enter your password']")
                      .clear()
                      .type(memberRegData.commonPassword);
                    cy.get("input[placeholder='Confirm your password']")
                      .clear()
                      .type(memberRegData.commonPassword);
                    cy.get("input[type='checkbox']").check();
                    cy.get("button[type='submit']")
                      .click();
                    cy.log(
                      `${data.email} has successfully registered for Eikon membership`
                    );
                    cy.get("button[class='btn okButton']").click();
                    cy.go(-3)
                  }
                );
              }
            });
        }
      });
    });
  });

  // it(`${index}. visit mailbox : ${data.email}`, () => {
  //   cy.pause()
  //   cy.visit("https://www.dispostable.com/");
  //   cy.get("input[id='m']").clear().type(data.email);
  //   cy.get("#submitinbox").click();
  //   cy.get("body")
  //     .should("not.contain", "No messages in this inbox. Go back")
  //     .then((body) => {
  //       cy.get("tr:nth-child(1) td:nth-child(3)").click();
  //       if (body.find("form").length) {
  //         cy.log("recaptcha visible");
  //         cy.frameLoaded("iframe[title='reCAPTCHA']");
  //         cy.iframe("iframe[title='reCAPTCHA']")
  //           .find(".recaptcha-checkbox-border")
  //           .click();
  //         cy.pause();
  //       } else {
  //         cy.log("captcha not visible");
  //       }
  //       cy.scrollTo("bottom");
  //       cy.get("a").each((button) => {
  //         if (button.text().includes("JOIN EIKON")) {
  //           const href = button.attr("href");
  //           cy.log(
  //             "Going to member registration page from invitation link in mail"
  //           );
  //           cy.origin(
  //             Cypress.env("url"),
  //             { args: [href, memberRegData, data] },
  //             ([href, memberRegData, data]) => {
  //               cy.visit(href);
  //               cy.url().should("include", Cypress.env("url") + "memberReg");
  //               cy.get(".fa.text-danger.mr-1").should("have.length", 6);
  //               cy.get("input[placeholder='Enter your password']")
  //                 .clear()
  //                 .type(memberRegData.commonPassword);
  //               cy.get("input[placeholder='Confirm your password']")
  //                 .clear()
  //                 .type(memberRegData.commonPassword);
  //               cy.get("input[type='checkbox']").check();
  //               // cy.pause();
  //               // cy.get("button[type='submit']").should("be.enabled").click();
  //               // cy.log(
  //               //   `${data.email} has successfully registered for Eikon membership`
  //               // );
  //               // cy.get("button[class='btn okButton']").click();
  //             }
  //           );
  //         }
  //       });
  //     });
  // });
});*/
