// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  timeout : 40 * 1000,
  workers: 1,
  retries: 1,
  expect:{
    timeout: 40 * 1000
  },
  reporter: [
  ['list'],
  ['junit', { outputFile: 'test-results/junit.xml' }],
  ['html', {
    outputFolder: 'playwright-report',
    open: 'never'
  }]
],
  use: {
    trace: 'retain-on-failure',
    browserName : "chromium",
    headless : true,
    screenshot: 'only-on-failure',
    
  },

  
});

