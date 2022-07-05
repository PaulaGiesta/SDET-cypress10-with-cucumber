const { defineConfig } = require('cypress');

module.exports = defineConfig({
  
  "defaultCommandTimeout": 20000,
  "pageLoadTimeout": 60000,
  "scrollBehavior": false,
  "screenshotOnRunFailure": true,
  "screenshotsFolder": 'cypress/screenshots',
  "waitForAnimations": false,
  //"video": false,
  "numTestsKeptInMemory": 1,
  "reporter": 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "html": true,
    "charts": true,
    "reportPageTitle": 'custom-title',
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "saveAllAttempts": false,
    "overwrite": true 
  },
 
  e2e: {
    // old cypress plugins here
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
      return require('./cypress-mochawesome-reporter/plugin')(on, config);
    },
    specPattern: ['**/*.feature', 'cypress/e2e/*.cy.{js,jsx,ts,tsx}'],
    
  },
})
