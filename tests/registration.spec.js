const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { generateUniqueUser } = require('../utils/userUtils');

test('User Registration - UI', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goto();

  const { username, email, password } = await generateUniqueUser('createuser');
  await registerPage.register(username, email, password);
   
  await expect(page.locator('.navbar')).toContainText(username);
});