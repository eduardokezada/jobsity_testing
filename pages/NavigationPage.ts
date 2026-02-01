// pages/NavigationPage.ts
import { Page, Locator } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;
  readonly mainNav: Locator;
  readonly homeTab: Locator;
  readonly onlineBankingTab: Locator;
  readonly feedbackTab: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainNav = page.locator('.navbar-inner');
    this.homeTab = page.locator('#homeMenu');
    this.onlineBankingTab = page.locator('#onlineBankingMenu');
    this.feedbackTab = page.locator('#feedback');
    this.logo = page.locator('.brand');
  }

  async clickLogo() {
    await this.logo.click();
  }
}