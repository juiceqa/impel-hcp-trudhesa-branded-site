/* eslint-disable no-undef */
/* eslint-disable semi */
/// <reference types="cypress" />

var cyView = require("cy-view")

var devices = [
  {
    model: "macbook-15",
    width: 1440,
    height: 900,
  },
]
// Add urls to test against
var urls = [
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/why-up-the-nose",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/trudhesa-difference",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/how-to-use",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/getting-trudhesa",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/faqs",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/stay-informed",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/important-safety-information",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/unsubscribe",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/unsubscribe-confirmation",
  "arteric:Letmein1@dev1-trudhesa-com.impel.client.rtrc.io/subscription-confirmation",
]

const trudhesaPatientPageLevelExternalLinkEvents = cyView(devices)

trudhesaPatientPageLevelExternalLinkEvents(urls, async () => {
  describe("return all page level external links", async () => {
    it(`return direct parent for all external links `, async () => {
      it(`appends each selector with data attributes `, function () {
        cy.get("@internalsNonGlobal")
          .each(($el) => {
            const extSelectorText = $el.text()
            const extSelectorParent = $el.prop("className")

            cy.wrap($el)
              .invoke(
                "attr",
                "data-cy",
                "global-ext-event-" + extSelectorText + "-" + extSelectorParent
              )
              .should(
                "have.attr",
                "data-cy",
                "global-ext-event-" + extSelectorText + "-" + extSelectorParent
              )
          })
          .then(() => {
            //@ts-ignore
            cy.document().toMatchSnapshot("dataCyAttrExtPageTags")
          })
      })
    })
  })
})
