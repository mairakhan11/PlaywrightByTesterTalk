const { test, expect } = require('@playwright/test');
const path = require('path');
const LoginPage = require('../POM/login');

test('authenticate', async ({ page }) => {
  const { CLIENT_EMAIL: email, CLIENT_PASSWORD: password } = process.env;
  if (!email || !password) {
    throw new Error('Set CLIENT_EMAIL and CLIENT_PASSWORD to run authenticated tests.');
  }

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(email, password);
  await expect(page).toHaveURL(/dashboard\/dash/);
  await page.context().storageState({ path: path.resolve(process.cwd(), 'auth.json') });
});
