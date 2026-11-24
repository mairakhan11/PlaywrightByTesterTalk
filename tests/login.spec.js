const { test, expect } = require('@playwright/test');
const LoginPage = require('../POM/login');

test.use({ storageState: { cookies: [], origins: [] } });

test('user can log in', async ({ page }) => {
  const { CLIENT_EMAIL: email, CLIENT_PASSWORD: password } = process.env;
  if (!email || !password) {
    throw new Error('Set CLIENT_EMAIL and CLIENT_PASSWORD to run authenticated tests.');
  }

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await expect(loginPage.loginHeading).toBeVisible();
  await loginPage.login(email, password);
  await expect(page).toHaveURL(/dashboard\/dash/);
});
