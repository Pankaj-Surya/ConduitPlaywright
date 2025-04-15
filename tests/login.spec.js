const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('User Login - UI', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  const email = 'user92239223@test.com';
  const password = 'Test1234';

  await loginPage.login(email, password);
  await expect(page.locator("ul a[href^='/profile/']")).toContainText('user');
});
