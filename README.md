
# QA Automation Challenge for Jobsity - Playwright Suite

## Prerequisites
- **Node.js**: Version 18 or higher.

## Setup
1. Clone or unzip the repository.
2. Open your terminal in the root folder and run:
   
   npm install
   npx playwright install --with-deps

## Reporting
Run the following command to open the playwright trace viewer locally 
   
   npx playwright show-trace show-report


## Project Structure
/Jobsity_Testing
├── playwright.config.ts          # Global config (Browsers, Viewports, BaseURLs)
├── tests/
│   ├── security.spec.ts        # Zero WebApp Security Tests
│   └── functional.spec.ts        # Zero WebApp Functional Tests
├── pages/                        # Page Object Model (POM)
│   ├── AdminUsersPage.ts             # Shared navigation/methods
│   ├── FeedbackPage.ts
|   ├── NavigationPage.ts
│   └── LoginPage.ts
├── package.json
└── README.md                     # Setup & Execution Guide


