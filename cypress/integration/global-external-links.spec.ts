/* eslint-disable no-undef */
/* eslint-disable semi */
/// <reference types="cypress" />

describe("return all external links", () => {
  beforeEach(function () {
    cy.visit("/")
  })

  it(`appends each external link selector with cy-data attributes `, () => {
  /*  const extTags = [{
      "dataCy": "global-cookie-notice-privacy-a-href-ext",
      "dataGtmCategory": "cookie-notice",
      "dataGtmAction": "external-link",
      "dataGtmLabel": "privacy-policy"
  },
  {
      "dataCy": "global-menu-external-a-href-ext",
      "dataGtmCategory": "header",
      "dataGtmAction": "external-link",
      "dataGtmLabel": "https://trudhesahcp.com"
  }, {
      "dataCy": "global-menu-external-a-href-ext",
      "dataGtmCategory": "header",
      "dataGtmAction": " external-link",
      "dataGtmLabel": "https://trudhesahcp.com"
  }, {
      "data-cy": "global-wrap-isi-a-href-tel-ext",
      "data-gtm-category": "sticky-isi",
      "data-gtm-action": "external-link",
      "data-gtm-label": "fda-phone"
  }, {
      "dataCy": "global-cookie-notice--a-int",
      "dataGtmCategory": "cookie-notice",
      "dataGtmAction": "click",
      "dataGtmLabel": "close-cookie-bar"
  }, {
      "dataCy": "global-menu-external-a-href-int",
      "dataGtmCategory": "header",
      "dataGtmAction": "file-download",
      "dataGtmLabel": "medication-guide-header"
  }, {
      "dataCy": "global-menu-external-a-href-int",
      "dataGtmCategory": "header",
      "dataGtmAction": "click",
      "dataGtmLabel": "isi-header"
  }, {
      "dataCy": "global-menu-external-a-href-int",
      "dataGtmCategory": "header",
      "dataGtmAction": "file-download",
      "dataGtmLabel": "prescribing-information-header"
  }, {
      "dataCy": "global-site-header-a-href-int",
      "dataGtmCategory": "header",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "trudhesa-logo"
  }, {
      "dataCy": "global-menu-connect-lozenge-button",
      "dataGtmCategory": "header",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "stay-informed-header"
  }, {
      "dataCy": "global-menu-trigger-icon",
      "dataGtmCategory": "navigation",
      "dataGtmAction": "click",
      "dataGtmLabel": "hamburger-navigation-open"
  }, {
      "dataCy": "global-menu-main-li-a-href-int",
      "dataGtmCategory": "navigation",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "why-up-nose-nav"
  },
  
  {
      "dataCy": "global-menu-main-li-a-href-int",
      "dataGtmCategory": "navigation",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "trudhesa-difference-nav"
  }, {
      "dataCy": "global-wrap-isi-a-href-tel-ext",
      "dataGtmCategory": "sticky-isi",
      "dataGtmAction": "external-link",
      "dataGtmLabel": "fda-phone"
  }, {
      "dataCy": "global-menu-main-li-a-href-int",
      "dataGtmCategory": "navigation",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "getting-trudhesa-nav"
  }, {
      "dataCy": "global-menu-main-li-a-href-int",
      "dataGtmCategory": "navigation",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "faqs-nav"
  }, {
      "dataCy": "global-menu-main-li-a-href-lozenge-button",
      "dataGtmCategory": "navigation",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "stay-informed-nav"
  }, {
      "dataCy": "global-img-menu-close-icon",
      "dataGtmCategory": "navigation",
      "dataGtmAction": "click",
      "dataGtmLabel": "close-nav"
  }, {
      "dataCy": "global-isi-a-href-int",
      "dataGtmCategory": "sticky-isi",
      "dataGtmAction": "click",
      "dataGtmLabel": "isi-sticky-redirect"
  }, {
      "dataCy": "global-cta-div-lozenge-button",
      "dataGtmCategory": "cta",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "getting-trudhesa-cta"
  }, {
      "dataCy": "global-cta-div-lozenge-button",
      "dataGtmCategory": "cta",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "stay-informed-cta"
  }, {
      "dataCy": "global-wrap-isi-a-href-int",
      "dataGtmCategory": "sticky-isi",
      "dataGtmAction": "internal-link",
      "dataGtmLabel": "trudhesa.com"
  }, {
      "dataCy": "global-wrap-isi-a-href-tel-ext",
      "dataGtmCategory": "sticky-isi",
      "dataGtmAction": "external-link",
      "dataGtmLabel": "report-side-effects-phone"
  }, {
      "dataCy": "global-wrap-isi-a-href-tel-ext",
      "dataGtmCategory": "sticky-isi",
      "dataGtmAction": "external-link",
      "dataGtmLabel": "fda-phone"
  }, {
      "dataCy": "global-footer-a-href-ext",
      "dataGtmCategory": "footer",
      "dataGtmAction": "external-link",
      "dataGtmLabel": "https://impelnp.com/privacypolicy/"
  }, {
      "dataCy": "global-footer-a-href-ext",
      "dataGtmCategory": "footer",
      "dataGtmAction": "external-link",
      "dataGtmLabel": "https://impelnp.com/termsof-nservice/"
  }, {
      "dataCy": "global-footer-a-href-ext",
      "dataGtmCategory": "footer",
      "dataGtmAction": "external-link",
      "dataGtmLabel": "https://trudhesahcp.com"
  }, {
      "dataCy": "global-modal-cont-lonzenge-button",
      "dataGtmCategory": "leaving-interstitial",
      "dataGtmAction": "click",
      "dataGtmLabel": "https://impelnp.com/"
  }, {
      "dataCy": "global-modal-cancel-int",
      "dataGtmCategory": "leaving-interstitial",
      "dataGtmAction": "click",
      "dataGtmLabel": "https://impelnp.com/"
  }, {
      "dataCy": "global-modal-cancel-int",
      "dataGtmCategory": "leaving-interstitial",
      "dataGtmAction": "click",
      "dataGtmLabel": "https://impelnp.com/"
  }, {
      "dataCy": "global-footer-a-href-ext",
      "dataGtmCategory": "leaving-interstitial",
      "dataGtmAction": "click",
      "dataGtmLabel": "https://impelnp.com/"
  }, {
      "dataCy": "global-footer-a-href-ext",
      "dataGtmCategory": "leaving-interstitial",
      "dataGtmAction": "click",
      "dataGtmLabel": ""
  }
  ]
  const key = Object.keys(extTags)
  const value = Object.values(extTags)
  
  Object.values(extTags)
  forEach(function (key, value) {
  cy.get("@externals").each(($el) => {
          cy.wrap($el)
            .invoke("attr", {
              "data-cy": "(`${key}: ${value}`)",
              "data-gtm-category": "(`${key}: ${value}`)",
              "data-gtm-action": "(`${key}: ${value}`)","data-gtm-label": "(`${key}: ${value}`)"
            })          
          .should(`have.attr`, {
            "data-cy": "(`${key}: ${value}`)",
            "data-gtm-category": "(`${key}: ${value}`)",
            "data-gtm-action": "(`${key}: ${value}`)","data-gtm-label": "(`${key}: ${value}`)"
          })
            
          }).then(() => {
            console.log(key, value)
          })

            cy.get('html').toMatchSnapshot("dataCyAttrExtGlobalTags")
          })
        })
      })*/
      cy.get("@externals").then(() => {
      cy.get("@internals").then(() => {
      cy.get ("@internalsNonGlobal")
      })
    }).then(console.table)
  })
})