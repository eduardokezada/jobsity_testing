# 🚀 QA Automation Challenge - Zero Bank Suite

This repository contains a professional Playwright automation suite using the Page Object Model (POM) pattern. 
It is designed to be cross-browser compatible and highly maintainable.

## Core Components

### 1. Page Objects (`/pages`)
Each file in this directory represents a specific page or component of the Zero WebApp. These classes encapsulate the selectors and methods required to interact with the UI, shielding the test files from changes in the DOM.

### 2. Test Suites (`/tests`)
* **`functional.spec.ts`**: Contains tests for standard user workflows like account management and feedback submission.
* **`security.spec.ts`**: Focuses on validating security checkpoints within the application.

### 3. Configuration (`playwright.config.ts`)
Manages browser settings (Chromium, Firefox, WebKit), execution environment (base URLs), timeouts, and reporting options.


## 🛠️ Prerequisites
- **Node.js**: v18.0.0 or higher.
- **npm**: v9.0.0 or higher.

## 🛠️ Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/eduardokezada/jobsity_testing.git
    cd jobsity_testing
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Install Playwright Browsers:**
    ```bash
    npx playwright install
    ```


## 🏃 Running the Tests

* **Run all tests:**
    ```bash
    npx playwright test
    ```
* **Run a specific test file:**
    ```bash
    npx playwright test tests/security.spec.ts
    ```
* **Run tests in UI Mode:**
    ```bash
    npx playwright test --ui
    ```


## 📋 Reporting

After test execution, you can view the detailed HTML report by running:
    ```bash
    npx playwright show-report
    ```
