const cypress = require('cypress');
const yargs = require('yargs');
const { merge } = require('mochawesome-merge');
const marge = require('mochawesome-report-generator');
const rm = require('rimraf');
const cypressConfig = require('./cypress');
const ls = require('ls');
// List the options that can be used, they can be printed by executing node runner --help in CLI.
const argv = yargs
  .options({
    browser: {
      alias: 'b',
      describe: 'Select browser to run tests against',
      default: 'electron',
      choices: ['chrome', 'electron', 'firefox'],
    },
    spec: {
      alias: 's',
      describe: 'Select spec tests to run',
      default: 'cypress/integration/*/**',
    }
  })
  .help().argv;
 
const reportDir = cypressConfig.reporterOptions.reportDir;
const reportFiles = `${reportDir}/*.json`;
console.log("Author: Mario García - mario.gr@globant.com")
console.log("Globant Internal Demo Project")
// Listing and removing files.
ls(reportFiles, { recurse: true }, (file) =>
  console.log(`** File removed: ${file.full}`)
);
rm(reportFiles, (error) => {
  if (error) {
    console.error(`Error while removing existing report files: ${error}`);
    process.exit(1);
  }
  console.log('> > > Hey Glober!... all report files were successfully removed < < <');
});
 
async function runCypress() {
  try {
    return await cypress.run({
      browser: argv.browser,
      spec: argv.spec,
      headed: argv.headed,
      headless: argv.headless,
      env: argv.env,
    });
  } catch (error) {
    console.error('ERROR:', error);
  }
}
// This function will generate mochawesome report along with the merging process
async function generateMochawesomeReport(results) {
  const reporterOptions = {
    reportDir: results.config.reporterOptions.reportDir,
    files: [`${results.config.reporterOptions.reportDir}/*.json`],
  };
  try {
    const report = await merge(reporterOptions);
    await marge.create(report, reporterOptions);
  } catch (error) {
    console.error('ERROR:', error);
  }
}
// This function is the one executed, it put everything together, also returns the proper exit code.
async function runTests() {
  try {
    const results = await runCypress();
    await generateMochawesomeReport(results);
    return process.exit(results.totalFailed);
  } catch (error) {
    console.error('ERROR:', error);
  }
}
 
runTests();
