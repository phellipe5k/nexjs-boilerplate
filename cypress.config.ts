import { defineConfig } from "cypress";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_TEST_BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
