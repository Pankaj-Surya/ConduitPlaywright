const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { HomePage } = require('../pages/HomePage');
const { EditorPage } = require('../pages/EditorPage');
const { generateUniqueUser } = require('../utils/userUtils');

test('Edit an existing article', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);
    const editorPage = new EditorPage(page);

    await registerPage.goto();


    const { username, email, password } = generateUniqueUser('edituser');
    await registerPage.register(username, email, password);

    await homePage.clickNewPost();
    await editorPage.createPost('Original Title', 'Original Desc', 'Original body');

    await page.click('text=Edit Article');
    await editorPage.createPost('Updated Title', 'Updated Desc', 'Updated body');

    await expect(page.locator('h1')).toHaveText('Updated Title');
    await expect(page.locator('p')).toHaveText('Updated body');
});
