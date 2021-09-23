Cypress.Commands.add("getPageViewTags", () => {
    return cy
        .wait("@jCollect")
        .its("request.url")
        .then(console.table)
        .then((s) => new URL(s))
        .its("searchParams")
        .then((url) => {
            return {
                hitType: url.get("t"),
            }
        })
})