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
  retries: 1,
  timeout : 2 * 1000,
  //workers: 1,
  expect:{
    timeout: 20 * 1000
  },
  projects: [
     {
          name: 'chrome',
          use: {
             trace: 'retain-on-failure',
             browserName : "chromium",
             headless : true,
             screenshot: 'on'
          }
     },
     {
          name: 'safari',
          use:{
             trace: 'retain-on-failure',
             browserName : "webkit",
             headless : true,
             screenshot: 'on',
             //...devices['Galaxy Note 3']
            //viewport: { width: 4712, height: 719932},
            video: 'retain-on-failure',
            ignoreHTTPSErrors: true,
            permissions: ['geolocation'],
    
          }
     }
  ],
  reporter: 'html',
  
});

