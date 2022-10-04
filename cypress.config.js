const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'zxgze2',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    watchForFileChanges: true,
    defaultCommandTimeout: 10000

  },
})
