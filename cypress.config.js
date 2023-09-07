const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  projectId: "bbhs8n",
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      cypressSplit(on, config)
            return config;
      // implement node event listeners here
    },
  },
});
