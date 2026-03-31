## Testing Strategy

This project uses Playwright with TypeScript to implement end-to-end tests following the Page Object Model (POM).

### Test Types

The test suite focuses on UI end-to-end validation to ensure that key user flows behave correctly in the browser.

Current tests cover:
- Language switching in the countries section
- Header validation after language selection

### Test Design Principles

- **Page Object Model (POM)** is used to separate UI locators and actions from test logic.
- **Reusable components** are implemented in page classes.
- **Assertions are centralized** within page objects when appropriate.
- Tests are written to be independent and reproducible.
