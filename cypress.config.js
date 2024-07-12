const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1280,
  e2e: {
    baseUrl: 'https://mantis-prova.base2.com.br',
    setupNodeEvents(on, config) {
    },
  },
})
