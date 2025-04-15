const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { HomePage } = require('../pages/HomePage');
const { EditorPage } = require('../pages/EditorPage');
const { generateUniqueUser } = require('../utils/userUtils');

test('Create Post - UI', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const homePage = new HomePage(page);
  const editorPage = new EditorPage(page);

  await registerPage.goto();

  const { username, email, password } = generateUniqueUser('createuser');

  await registerPage.register(username, email, password);
  await homePage.clickNewPost();

  await editorPage.createPost(`Test Title ${username}`, 'Test Description', 'This is a test body.');
  await expect(page.locator('h1')).toHaveText(`Test Title ${username}`);
});