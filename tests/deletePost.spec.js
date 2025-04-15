const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { HomePage } = require('../pages/HomePage');
const { EditorPage } = require('../pages/EditorPage');
const { generateUniqueUser } = require('../utils/userUtils');

test('Delete a post and verify it is removed', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);
    const editorPage = new EditorPage(page);

    await registerPage.goto();

    const { username, email, password } = generateUniqueUser('deluser');

    await registerPage.register(username, email, password);

    await homePage.clickNewPost();
    await editorPage.createPost('Delete Me', 'About deletion', 'Please delete this post');

    // Delete the post
    await page.click('text=Delete Article');

    // Wait and confirm post no longer accessible
    await page.waitForTimeout(1000);
    await expect(page).not.toHaveURL(/article/);
});
