/* eslint-disable no-undef */
/* eslint-disable semi */
/// <reference types="cypress" />

var cyView = require("cy-view")

// Add urls to test against
const urls = [
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/stay-informed",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/about-trudhesa/",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/efficacy",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/patient-benefits",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/coverage-and-savings",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/how-to-use",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/how-to-prescribe",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/unsubscribe",
  "https://impeltester:ZJZ86tTtvZrU5s@test-trudhesahcp.pantheonsite.io/important-safety-information"
]

const trudhesaHCPPageLevelExternalLinkEvsents = cyView(urls)

trudhesaHCPPageLevelExternalLinkEvsents(urls, () => {
  describe("return all page level external links", () => {
    it(`return direct parent for all external links `, () => {
      const ext_tags = require("../fixtures/taggingmatrix.json")

      Object.values(ext_tags)
      .forEach(function (value) {
        cy.get("@internals").each(($el) => {
          cy.wrap($el)
            .invoke("attr", {
              "data-cy": ext_tags.dataCy,
              "data-gtm-category": ext_tags.dataGtmCategory,
              "data-gtm-action": ext_tags.dataGtmAction,
              "data-gtm-label": ext_tags.dataGtmLabel,
            })  
            .should(`have.attr`, {
              "data-cy": ext_tags.dataCy,
              "data-gtm-category": ext_tags.dataGtmCategory,
              "data-gtm-action": ext_tags.dataGtmAction,
              "data-gtm-label": ext_tags.dataGtmLabel,
            })  
            console.log(value)
  
              cy.get('html').toMatchSnapshot("dataCyAttrExtGlobalTags")
          })
        })
      })
    })
  })