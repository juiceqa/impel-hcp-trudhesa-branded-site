/* eslint-disable no-undef */
/* eslint-disable semi */
/// <reference types="cypress" />

describe("return all internal links", () => {
  beforeEach(function () {
    cy.visit("/")
  })
  it(`appends each internal link selector with cy-data attributes `, () => {
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
          }).then(() => {
          console.log(value)
          })
            cy.get('html').toMatchSnapshot("dataCyAttrExtGlobalTags")
            })    
        })
      })
    })