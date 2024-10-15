import { expect, Locator } from '@playwright/test';

export class WebElement {
  locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async waitForElementVisible() {
    await this.locator.waitFor({ state: 'visible' });
  }

  async waitForElementHidden() {
    await this.locator.waitFor({ state: 'hidden' });
  }

  async waitForElementEnable() {
    await expect(this.locator).toBeEnabled();
  }

  async click() {
    await this.locator.click();
  }

  async hover() {
    await this.locator.hover();
  }

  async getAttribute(name: string) {
    return await this.locator.getAttribute(name);
  }

  async textContent() {
    return await this.locator.textContent();
  }

  async innerText() {
    return await this.locator.innerText();
  }

  async getElementText(): Promise<string> {
    await this.waitForElementVisible();
    const elementText: string = (await this.locator.allInnerTexts()).toString();
    return elementText;
  }

  async fill(value: string) {
    await this.waitForElementVisible();
    await this.locator.fill(value);
  }

  async type(value: string, options?: { delay?: number }) {
    await this.waitForElementVisible();
    await this.locator.type(value, options);
  }

  async clear() {
    await this.waitForElementVisible(); 
    await this.locator.fill('');
  }

  
}
