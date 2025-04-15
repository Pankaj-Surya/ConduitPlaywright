exports.LoginPage = class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('input[placeholder="Email"]');
      this.passwordInput = page.locator('input[placeholder="Password"]');
      this.signInButton = page.locator('button', { hasText: 'Sign in' });
    }
  
    async goto() {
      await this.page.goto('https://conduit.bondaracademy.com/login');
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.signInButton.click();
    }
  };
  