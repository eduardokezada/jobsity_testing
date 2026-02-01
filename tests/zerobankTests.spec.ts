// tests/zero-bank.spec.ts
import { test, expect } from '@playwright/test';
import { FeedbackPage } from '../pages/FeedbackPage';
import { NavigationPage } from '../pages/NavigationPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Zero WebApp Security - Functional & Responsive Suite', () => { 

  let feedbackPage: FeedbackPage;
  let navPage: NavigationPage;

  test.beforeEach(async ({ page }) => {
    feedbackPage = new FeedbackPage(page);
    navPage = new NavigationPage(page);
    await page.goto('http://zero.webappsecurity.com/index.html'); 
  });

  /**
   * @requirement Verify the main navigation is displayed in all internal tabs
   */
  test('TC-NAV-01: Navigation Persistence', async () => { 
    const tabs = [navPage.onlineBankingTab, navPage.feedbackTab];
    
    for (const tab of tabs) {
      await tab.click();
      await expect(navPage.mainNav).toBeVisible(); 
    }


  });

  /**
   * @requirement Able to login using provided credentials
   */
    test('TC-NAV-02 : Login Testing', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const TEST_USERNAME = "Leeroy Jenkins"
    const TEST_PASSWORD = "VIZ10AWT8VL"
    await loginPage.goto();
    await loginPage.login(TEST_USERNAME, TEST_PASSWORD);
  });

  /**
   * @requirement Layout must adapt to mobile device screens
   */
  test('TC-RESP-03: Mobile Search Bar', async ({ page, isMobile }) => { 
    test.skip(!isMobile, 'This test is specific to mobile viewports');
    
    const searchBar = page.getByPlaceholder('Search');
    await expect(searchBar).toBeVisible(); 
  });

  /**
   * @requirement Feedback contact form should validate inputs before sending
   */
  test('TC-FB-04: Valid Submission', async () => { 
    await feedbackPage.navigate();
    await feedbackPage.submitForm('QA Expert', 'test@test.com', 'Subject Line', 'Valid comment text');
    await expect(feedbackPage.successMessage).toContainText('Thank you for your comments'); 
  });

  test('TC-FB-05: Empty Field Validation', async () => { 
    await feedbackPage.navigate();
    await feedbackPage.sendMessageButton.click();
    
    // Check for native HTML5 validation
    const isNameValid = await feedbackPage.nameInput.evaluate((node: HTMLInputElement) => node.checkValidity());
    expect(isNameValid).toBe(false); 
  });

 

});