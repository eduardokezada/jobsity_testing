import { test, expect } from '@playwright/test';
import { AdminUsersPage } from '../pages/AdminUsersPage';

test.describe('Admin Users Page Tests', () => {
  let adminUsersPage: AdminUsersPage;

  test.beforeEach(async ({ page }) => {
    adminUsersPage = new AdminUsersPage(page);
    await adminUsersPage.goto();
  });

  /**
 * @requirement Verify if we have access without login credentials
 */
  test('TC-SEC-08: Unauthorized URL Access', async () => {
    await expect(adminUsersPage.pageHeader).toHaveText('Users');
    await adminUsersPage.verifyTableHasData();
  });


  /**
 * @requirement Verify user details are exposed
 */
  test('TC-SEC-09: Verify User Details', async () => {
    const user = await adminUsersPage.getUserDetailsByName('Leeroy Jenkins');

    // Validate if data is vulnerable
    expect(user.name).toBe('Leeroy Jenkins');
    expect(user.password).toBe('VIZ10AWT8VL');
    expect(user.ssn).toBe('536-48-3769');
  });
  /**
 * @requirement Verify the URL access requires login credentials
 */
  test('TC-SEC-10: Check Page Access', async () => {
    await adminUsersPage.navCurrencies.click();
    await expect(adminUsersPage.page).toHaveURL(/currencies.html/);
  });


});