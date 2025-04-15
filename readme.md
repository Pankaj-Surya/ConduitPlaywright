```markdown
# 🧪 Conduit QA Automation Suite (Playwright JS)

This repository contains an industry-grade QA automation test suite for [Conduit](https://conduit.bondaracademy.com/), a blogging platform. It uses **Playwright with JavaScript**, built with clean structure, environment-specific configurations, reusable page objects, and best practices to reflect years of real-world experience in test automation.

```
---

```markdown

## 🏗️ Project Structure

conduit-playwright-framework/
├── tests/                        # All Playwright test specs
│   ├── register.spec.js         # Register user test
│   ├── login.spec.js            # Login test
│   ├── post.spec.js             # Create, edit, delete post tests
│   ├── favorites.spec.js        # Favorite/unfavorite post test
│   └── profile.spec.js          # View profile, my posts, etc.
│
├── pages/                       # Page Object Models (POM)
│   ├── BasePage.js              # Common reusable methods (optional)
│   ├── LoginPage.js             # Login functionality
│   ├── RegisterPage.js          # Register user
│   ├── HomePage.js              # Home page (global feed, new post, etc.)
│   ├── EditorPage.js            # Create/edit post
│   ├── ProfilePage.js           # User profile, favorited posts, etc.
│
├── utils/                       # Utility files for data and helpers
│   ├── UserUtil.js              # Dynamic user generator (username/email/password)
│   ├── PostUtil.js              # Post generation, favoriting helpers
│   └── testDataGenerator.js     # Reusable random string generators
│
├── config/
│   └── secrets.env              # Credentials (excluded from Git)
│   └── testConfig.js            # Optional central config (timeout, baseURL, etc.)
│
├── playwright.config.js         # Playwright test runner config
├── .env                         # Used for Playwright config (if needed)
├── .gitignore                   # Node, Playwright, env exclusions
├── README.md                    # Project overview and documentation
├── package.json                 # Project metadata & dependencies
└── package-lock.json            # Dependency lock

```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/conduit-playwright-framework.git
   cd conduit-playwright-framework
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file for credentials and configs:**
   > `.env`
   ```env
   EMAIL=user92@test.com
   PASSWORD=Test34
   BASE_URL=https://conduit.bondaracademy.com
   ```

---

## 🚀 Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run a specific test:**
  ```bash
  npx playwright test tests/register.spec.js
  ```

- **View HTML Report:**
  ```bash
  npx playwright show-report
  ```

---

## 🔐 Environment Variables (with Defaults)

All secrets are loaded from `.env` using [dotenv](https://www.npmjs.com/package/dotenv). If missing, safe defaults are used.

```js
const email = process.env.EMAIL || 'defaultuser@test.com';
const password = process.env.PASSWORD || 'Default1234';
```

---

## 📌 Key Features

- ✅ Page Object Model (POM) implementation
- ✅ Data-driven test support
- ✅ Utility modules for user and post management
- ✅ .env based config for secure, flexible credentials
- ✅ Structured to reflect enterprise-level test design
- ✅ Ready for CI integration

---

## 🧪 Test Coverage

| Flow                        | Status     |
|-----------------------------|------------|
| User Registration           | ✅ Complete |
| User Login (UI + API)       | ✅ Complete |
| Create Article              | ✅ Complete |
| Edit & Delete Article       | ✅ Complete |
| Favorite / Unfavorite Post  | ✅ Complete |
| View User Profile Posts     | ✅ Complete |

---

## 🧰 Tools & Libraries

- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Expect API](https://playwright.dev/docs/test-assertions)

---

## 📂 Report Location

After running tests, a report is generated here:
```
playwright-report/index.html
```

Open the report with:
```bash
npx playwright show-report
```

---

## 🤝 Author

**QA Automation Engineer with 3.5+ years experience**  
✉️ pankajsuryavanshi731@gmail.com  
📱 7738633672  

---



