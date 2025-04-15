exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[placeholder="Username"]');
    this.emailInput = page.locator('input[placeholder="Email"]');
    this.passwordInput = page.locator('input[placeholder="Password"]');
    this.signupButton = page.locator('button', { hasText: 'Sign up' });
  }

  async goto() {
    await this.page.goto('https://conduit.bondaracademy.com/register');
  }

  async register(username, email, password) {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
        
    await this.signupButton.click();
  }
};