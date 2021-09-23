const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter")
const { initPlugin } = require("cypress-plugin-snapshots/plugin")

module.exports = (on, config) => {
    initPlugin(on, config)

    const port = process.env.CYPRESS_TESTSERVER_PORT
    if (port) {
        config.baseUrl = config.baseUrl.replace(":8080", `:${port}`)
    }
    installLogsPrinter(on, {
        outputRoot: config.projectRoot + "/logs/",
        outputTarget: {
            "cylogs.txt": "txt",
            "cylogs.json": "json",
        },
        logToFilesOnAfterRun: true,
        logToFilesOnAfterRun: true,
        includeSuccessfulHookLogs: true,
        printLogsToFile: "always",
    })
    on("task", {
        failed: require("cypress-failed-log/src/failed")(),

        return: null,
    })
    on("before:browser:launch", (browser = {}, launchOptions) => {
        launchOptions.args = require("cypress-log-to-output").browserLaunchHandler(
            browser,
            launchOptions.args
        )

        // whatever you return here becomes the launchOptions
        if (browser.family === "chromium" && browser.name !== "electron") {
            launchOptions.args.push("--auto-open-devtools-for-tabs")
        } else if (browser.family === "firefox") {
            launchOptions.args.push("-devtools")
        } else if (browser.name === "electron") {
            launchOptions.preferences.devTools = true
        }

        return launchOptions
    })
    return config
}