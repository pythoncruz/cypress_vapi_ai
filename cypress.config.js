const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config(); 

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "https://dashboard.vapi.ai",
    env: {
      EMAIL: process.env.CYPRESS_EMAIL,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },
    setupNodeEvents(on, config) {
      
    },
  },
});
