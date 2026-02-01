# 🚀 QA Automation Challenge - Zero Bank Suite

This repository contains a professional Playwright automation suite using the Page Object Model (POM) pattern. 
It is designed to be cross-browser compatible and highly maintainable.

## 📋 Prerequisites
- **Node.js**: v18.0.0 or higher.
- **npm**: v9.0.0 or higher.

## 🛠️ Setup & Installation
1. Clone or extract the `Jobsity_Testing` folder.
2. Open your terminal in the root directory and run:
   ```bash
   npm install
   npx playwright install --with-deps


## 🏃 Running the Tests

    Run all tests (Headless):

    npx playwright test

    Run with UI Mode (Interactive): npx playwright test --ui

    Run specific file: npx playwright test tests/security.spec.ts

    
## Reporting
To view the playwright report simply run npx playwright show-report to open the trace.

