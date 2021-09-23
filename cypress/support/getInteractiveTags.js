Cypress.Commands.add("getInteractiveTag", () => {
    return cy
        .wait("@gaCollect")
        .its("request.url")
        .then(console.table)
        .then((s) => new URL(s))
        .its("searchParams")
        .then((url) => {
            return cy.writeFile("events.json", {
                hitType: url.get("t"),
                eventCategory: url.get("ec"),
                eventAction: url.get("ea"),
                eventLabel: url.get("el"),
            })
        })
})