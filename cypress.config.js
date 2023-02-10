const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "DermoApp",
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    baseUrl: 'http://localhost:8100',
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
