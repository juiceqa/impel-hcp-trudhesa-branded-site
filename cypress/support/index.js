// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import "cypress-pipe"
import "cypress-plugin-snapshots/commands"
import "../../register"
import "babel-polyfill"
import "./finder"
import "cypress-movie/commands"
import "cypress-failed-log"
import "@bahmutov/cy-api/support"
import "dotenv"
import "./commands"
import "./getInteractiveTags"
import "./getPageviewTags"
require("cypress-commands")
require("cypress-terminal-report/src/installLogsCollector")()
import addContext from "mochawesome/addContext"
// configure({ testIdAttribute: "data-gtm-tracking" })

const options = {
    // Log console output only
    collectTypes: [
        "cy:log",
        "cy:request",
        "cy:route",
        "cy:intercept",
        "cy:command",
        "cy:xhr",
        "cons:info",
        "cons:log",
        "cons:error",
    ],
}

// Register the log collector
require("cypress-terminal-report/src/installLogsCollector")(options)
    // ...

Cypress.on("test:after:run", (test, runnable) => {
    let videoName = Cypress.spec.name
    videoName = videoName.replace("/.js.*", ".js")
    const videoUrl = "videos/" + videoName + ".mp4"

    addContext({ test }, videoUrl)
})

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/* Cypress.on("window:before:load", (win) => {
    const cookie = Cypress.env("CYPRESS_COOKIE")
    const token = Cypress.env("CYPRESS_TOKEN")
}) */
beforeEach(function() {
    cy.log(
        "--- CREATE ALIASES FOR GOOGLE ANALYTICS NETWORK CALLS: /j/collect POST CALL & /collect GET CALL FOR EASY ACCESS LATER IN TESTS"
    )
    cy.intercept("POST", "/j/collect*", {
        statusCode: 200,
    }).as("jCollect")
    cy.intercept("GET", "/collect*", {
        statusCode: 200,
    }).as("gaCollect")
    cy.visit('/')
    cy.get(
        "a").as("internalsNonGlobal")
    cy.get('a:not([href^="https://test-trudhesahcp.pantheonsite.io/"]').as("externals")

    cy.get(
        ".site-header > a[href], #menu-external > li > a[href], #menu-main > li > a[href], .cookie-notice-container > a[href], #cn-notice-text > a, #cn-notice-buttons > a[href], .lozenge > a, button, img#menu-c lose, a > .main-isi-title"
    ).as("internals")
})

afterEach(() => {
    Cypress.on("test:after:run", (test, runnable) => {
        if (test.state === "failed") {
            const screenshotFileName = `
                                        $ { runnable.parent.title }--$ { test.title }(failed).png `
            addContext({ test },
                `.. / .. / cypress / screenshots / $ { Cypress.spec.name }
                                        /${screenshotFileName}`
            )
        }
    })
})