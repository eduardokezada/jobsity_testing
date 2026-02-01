// pages/FeedbackPage.ts
import { Page, Locator } from '@playwright/test';

export class FeedbackPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly commentInput: Locator;
  readonly sendMessageButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.subjectInput = page.locator('#subject');
    this.commentInput = page.locator('#comment');
    this.sendMessageButton = page.locator('input[name="submit"]');
    this.successMessage = page.locator('.offset3.span6');
  }

  async navigate() {
    await this.page.goto('http://zero.webappsecurity.com/feedback.html');
  }

  async submitForm(name: string, email: string, subject: string, comment: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.commentInput.fill(comment);
    await this.sendMessageButton.click();
  }
}