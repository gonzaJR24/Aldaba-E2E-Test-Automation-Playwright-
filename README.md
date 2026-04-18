# E2E Automation Project

End-to-end testing project built with Playwright, using Page Object Model and CI integration via GitHub Actions.

---

## 🚀 Tech Stack
- Playwright
- Node.js
- GitHub Actions (CI)
- Page Object Model (POM)

---

## 📁 Project Structure
```
├── .github/workflows   # CI pipelines (GitHub Actions)
├── pages               # Page Object Models
├── tests               # Test specs
├── fixtures            # Test data setup
├── data                # Static test data
├── playwright-report   # HTML reports
```

### Test Design Principles

- Page Object Model to encapsulate page interactions
- Tests focus on behavior, not implementation details
- Reusable actions centralized in page classes
- Independent and deterministic test execution

---

## Installation

```
npm install
npx playwright install
```


## Running Tests

Run all tests:

```
npx playwright test
```

Run tests in headed mode:

```
npx playwright test --headed
```

---
## Test Reports

Generate and open the HTML report:

```
npx playwright show-report
```

---
## CI Pipeline

Tests run automatically on:
- Pull requests to `main`
- Pushes to `main`

Powered by GitHub Actions.

## Author
QA Engineer - Junior A. Gonzalez