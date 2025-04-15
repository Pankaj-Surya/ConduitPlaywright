require('dotenv').config({ path: __dirname + '/.env' })
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { generateUniqueUser } = require('../utils/userUtils');
const { generateUniquePost } = require('../utils/postUtils');


test('Favorite and unfavorite a post', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Provide default values if env variables are undefined
    const email = process.env.email || 'user92239223@test.com';
    const password = process.env.password || 'Test1234';
    console.log(email, password)


    // Login
    await loginPage.goto();
    await loginPage.login(email, password);

    // Navigate to profile 
    await page.locator("nav >> a[href*='/profile/']").click();

    // My Posts
    await page.locator("text= My Posts ").click();
    const button = page.locator('button').first();
    //  const likeCountt = heartIconn.locator('.. >> span'); // heart count

    // Get the count as text and convert to number
    const countText = await button.textContent();
    const count = parseInt(countText.trim());

    // Only click 'like' if count is 0
    if (count === 0) {
        await button.click();
        await expect(button).toHaveText('1');
    } else {
        console.log(`Post is already liked. Current count: ${count}`);
    }

    //Favorited Posts
    await page.locator("text=Favorited Posts").click();
    await page.waitForTimeout(1000)

    // Like the first post and verify count becomes 1
    const heartIcon = page.locator('button').first();

    // Like
    await heartIcon.click();
    // await page.waitForTimeout(2000)
    await expect(heartIcon).toHaveText('0');

    // Unlike
    await heartIcon.click();
    await expect(button).toHaveText('1');

});
