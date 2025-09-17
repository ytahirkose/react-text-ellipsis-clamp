# Contributing to react-text-ellipsis-clamp

Thank you for your interest in contributing to react-text-ellipsis-clamp! This document provides guidelines and information for contributors.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide code examples that reproduce the issue
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots and animated GIFs if possible
- Include your environment details (OS, browser, React version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior and explain which behavior you expected to see instead
- Explain why this enhancement would be useful
- List some other applications where this enhancement would be useful

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Ensure all tests pass (`npm test`)
6. Run type checking (`npm run typecheck`)
7. Build the package (`npm run build`)
8. Commit your changes (`git commit -m 'Add some amazing feature'`)
9. Push to the branch (`git push origin feature/amazing-feature`)
10. Open a Pull Request

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ytahirkose/react-text-ellipsis-clamp.git
   cd react-text-ellipsis-clamp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Run type checking:
   ```bash
   npm run typecheck
   ```

5. Build the package:
   ```bash
   npm run build
   ```

## Coding Standards

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Write meaningful commit messages
- Add tests for new functionality
- Ensure all tests pass before submitting
- Update documentation for new features
- Use conventional commit messages when possible

## Testing

- All new features must include tests
- Tests should be written using Jest and React Testing Library
- Aim for high test coverage
- Test both happy path and edge cases
- Include accessibility tests where applicable

## Documentation

- Update README.md for new features
- Add examples for new functionality
- Update API documentation
- Include TypeScript type information
- Add JSDoc comments for complex functions

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md` with new features/fixes
3. Create a new tag
4. Push changes and tags
5. GitHub Actions will automatically publish to npm

## Questions?

If you have any questions about contributing, please open an issue or contact the maintainers.

Thank you for contributing! 🎉
