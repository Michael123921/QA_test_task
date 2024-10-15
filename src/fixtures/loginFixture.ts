import { test as base } from '@playwright/test';

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await page.goto('https://enotes.pointschool.ru/login');
    await use(page);
  },
});

export { test };
