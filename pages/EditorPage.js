exports.EditorPage = class EditorPage {
  constructor(page) {
    this.page = page;
    this.titleInput = page.locator('input[placeholder="Article Title"]');
    this.descInput = page.locator('input[placeholder^="What"]');
    this.bodyInput = page.locator('textarea[placeholder="Write your article (in markdown)"]');
    this.publishButton = page.locator('button', { hasText: 'Publish Article' });
  }

  async createPost(title, desc, body) {
    await this.titleInput.fill(title);
    await this.descInput.fill(desc);
    await this.bodyInput.fill(body);
    await this.publishButton.click();
  }
};