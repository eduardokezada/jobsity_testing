import { expect, Locator, Page } from '@playwright/test';

export class AdminUsersPage {
  readonly page: Page;
  readonly url: string = 'http://zero.webappsecurity.com/admin/users.html';
  
  // Locators
  readonly pageHeader: Locator;
  readonly usersTable: Locator;
  readonly tableRows: Locator;
  readonly navHome: Locator;
  readonly navUsers: Locator;
  readonly navCurrencies: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = page.locator('h2'); // The "Users" title
    this.usersTable = page.locator('table.table'); // Standard table selector
    this.tableRows = this.usersTable.locator('tbody tr');
    
    // Navigation Links
    this.navHome = page.getByRole('link', { name: 'Home' });
    this.navUsers = page.getByRole('link', { name: 'Users' });
    this.navCurrencies = page.getByRole('link', { name: 'Currencies' });
  }

  async goto() {
    await this.page.goto(this.url);
  }

  /**
   * Retrieves data for a specific user by their name
   * @param name - The name of the user (e.g., 'Leeroy Jenkins')
   */
  async getUserDetailsByName(name: string) {
    const row = this.tableRows.filter({ hasText: name });
    const cells = row.locator('td');
    
    return {
      name: await cells.nth(0).innerText(),
      password: await cells.nth(1).innerText(),
      ssn: await cells.nth(2).innerText()
    };
  }

  /**
   * Verifies that the table is not empty
   */
  async verifyTableHasData() {
    const count = await this.tableRows.count();
    expect(count).toBeGreaterThan(0);
  }
}