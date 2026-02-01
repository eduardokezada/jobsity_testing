import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'http://zero.webappsecurity.com',
    ignoreHTTPSErrors: true, // Critical for this test suite since the URL is designed to have these.
    trace: 'on',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    
    {
      name: 'Chromium Mobile',
      use: { 
        ...devices['Pixel 9'],
        isMobile: true
      },
    }
    
  ],
});
