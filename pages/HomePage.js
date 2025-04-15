exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.newPostLink = page.locator('a[href="/editor"]');
  }

  async clickNewPost() {
    await this.newPostLink.click();
  }
};