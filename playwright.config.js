// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40 * 1000,
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false

  },

  expect: {
    timeout: 5 * 1000
  }


});

module.exports = config;