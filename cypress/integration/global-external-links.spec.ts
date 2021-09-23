/* eslint-disable no-undef */
/* eslint-disable semi */
/// <reference types="cypress" />

describe("return all external links", () => {
  beforeEach(function () {
    cy.visit("/")
  })
  it(`appends each external link selector with cy-data attributes `, () => {
    const ext_tags = require("../fixtures/taggingmatrix.json")

    Object.values(ext_tags)
      .forEach(function (value) {
        cy.get("@externals").each(($el) => {
          cy.wrap($el)
            .invoke("attr", {
              "data-cy": ext_tags.dataCy[0],
              "data-gtm-category": ext_tags.dataGtmCategory[0],
              "data-gtm-action": ext_tags.dataGtmAction[0],
              "data-gtm-label": ext_tags.dataGtmLabel[0],
            })  
            .should(`have.attr`, {
              "data-cy": ext_tags.dataCy[0],
              "data-gtm-category": ext_tags.dataGtmCategory[0],
              "data-gtm-action": ext_tags.dataGtmAction[0],
              "data-gtm-label": ext_tags.dataGtmLabel[0],
            })          
            console.log(value)

            cy.get('[data-cy]').toMatchSnapshot("dataCyAttrExtGlobalTags")
          })
        })
      })
    })