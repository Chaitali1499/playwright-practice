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
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    headless: false,
    screenshot: 'only-on-failure',
    baseURL: 'https://the-internet.herokuapp.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});










//use: {
//     baseURL: 'https://the-internet.herokuapp.com',
//     headless: false,
//     screenshot: 'only-on-failure',
// },

// There are three common options
// on
// Take a screenshot for every test.
// off
// Don't take screenshots automatically.
// only-on-failure
// Take screenshots only when a test fails. 

// trace: 'on-first-retry'
// This means Playwright records a trace when the test is retried for the first time.
//"Playwright Trace Viewer helps us debug test failures by capturing actions, screenshots, DOM snapshots, and other execution details. 
// We can configure it using options such as on-first-retry.
//A trace is like a detailed recording of a Playwright test.

// How do you debug a failed Playwright test?
// “I first check the error message and test report. For deeper debugging, I use Playwright Trace Viewer. 
// It allows me to inspect the actions, screenshots, DOM snapshots, network activity, and timing around the failure. 
// In my framework, I configure trace: 'on-first-retry' so traces are available for flaky failures.”

//timeout: 30000
// Controls how long the whole test can run.

//actionTimeout: 10000
// Controls how long individual actions can wait.

// What is timeout in Playwright?
// "Timeout defines how long Playwright waits for a test or action to complete before marking it as failed. 
// The timeout value is specified in milliseconds."

//Playwright uses milliseconds.
// 1000  = 1 second
// 5000  = 5 seconds
// 10000 = 10 seconds
// 30000 = 30 seconds

//retries: 2
//What is the purpose of retries in Playwright?
//"Retries allow failed tests to be executed again automatically. 
// They can help handle temporary or flaky failures, especially in CI environments."

//Browser Projects.
//How do you run Playwright tests on multiple browsers?
// We can configure browser projects in playwright.config.js for Chromium, Firefox, and WebKit. 
// The same test suite can then run against each configured project.

//Do you need to write separate tests for Chrome, Firefox and Safari?"
//"No. We can configure browser projects in Playwright and execute the same test suite against different browser engines."
// example npx playwright test tests/baseurl.spec.js --project=chromium

//What is auth.json in Playwright?
//auth.json is a file used to store the authenticated browser state after a successful login.
//It can contain information such as cookies, local storage, and other session-related data required to keep the user logged in.
//Instead of performing the login steps before every test, we can log in once, save the authentication state in auth.json, and reuse it in other tests using Playwright's storageState.

//Interview answer
//“In Playwright, we use auth.json to store the authenticated browser state. After logging in successfully, 
// we save the storage state using storageState(). Then we configure Playwright to reuse this state in other tests, so we don't have to perform the login steps repeatedly.”

//Simple example
// await page.context().storageState({
//     path: 'auth.json'
// });

// Then:
// use: {
//     storageState: 'auth.json'
// }
// Remember this for interview
// Login once → Save state → Reuse state → Avoid repeated login
// Also, auth.json is not a test-data file. It is specifically used for authentication/session state.

// Why did we create a setup project?
// This is for framework-level automation.
// We told Playwright:

// {
//     name: 'setup',
//     testMatch: /.*\.setup\.js/,
// }

// This means:
// Run my authentication setup separately.

// Then:
// dependencies: ['setup']
// means:
// The Chromium tests depend on the setup project, so run setup first.

// The flow becomes:

//                 Playwright
//                     ↓
//               Setup project
//                     ↓
//              Login application
//                     ↓
//              Create auth.json
//                     ↓
//              Chromium tests
//                     ↓
//           Reuse authenticated state
// 🎯 Why is this important in an interview?

// For a 3-year Playwright/SDET role, an interviewer may ask:

// Q1. How do you handle authentication in Playwright?
// "I use Playwright's storageState to handle authentication. I create a setup test that performs the login and saves the authenticated browser state into an auth.json file. Then I configure the test project to reuse this authentication state, so individual tests don't have to perform the login repeatedly."

// Q2. What is storageState?
// "storageState is a Playwright feature used to save and reuse the browser's authentication state, such as cookies and local storage. It helps us avoid logging in repeatedly in every test."

// Q3. Why do we use an authentication setup?
// "The authentication setup centralizes the login process. It runs before dependent tests, creates the authentication state, and allows other tests to start from an already authenticated session."

// Q4. What is the purpose of dependencies: ['setup']?
// "It tells Playwright that the current project depends on the setup project. Playwright runs the setup first and then executes the dependent tests."

// Q5. What is the advantage?

// Main advantages:
// Avoid repeated login
// Faster test execution
// Less duplicate code
// Cleaner test cases
// Centralized authentication
// Useful for large automation frameworks

// ⭐ Remember this one line
// For your interview, remember:
// "Login once → save authentication state → reuse it across tests."
// That's the main purpose of auth.json + storageState + setup project.

// Parallel execution = running tests at the same time
// Worker = process that executes those tests
// More workers → potentially faster execution

// But tests that depend on each other should generally not be designed to rely on execution order.

// Interview answer
// “Playwright supports parallel test execution using workers. 
// Multiple workers can execute independent tests simultaneously, which helps reduce overall execution time. 
// The number of workers can be configured in the Playwright configuration.”

//“Parallel execution improves speed, but tests should be independent because Playwright does not guarantee that parallel tests will execute in a particular order.”

//“A flaky test is a test that passes and fails intermittently without a code change. 
// Playwright provides retries to rerun failed tests automatically. 
// We can configure the number of retries using the retries option.”

//“Playwright provides an HTML reporter that gives a detailed view of test execution, including passed and failed tests, errors, duration, screenshots and traces when available. 
// I can generate the report after execution and open it using npx playwright show-report.”

//What is the difference between Playwright Report and Trace Viewer?
//“The HTML report gives an overall summary of test execution, including passed and failed tests. 
// Trace Viewer is used for detailed debugging of a specific test by showing actions, screenshots, DOM snapshots, network activity and other execution details.”
