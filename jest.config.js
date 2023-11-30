module.exports = {
    // Indicates that Jest should transform files with babel-jest
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    // Configures the test environment
    testEnvironment: 'jsdom',
    // Defines the directories that Jest should use for tests
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    // Modules that shouldn't be transformed
    transformIgnorePatterns: [
      '/node_modules/(?!(your-module-to-exclude|other-module))',
    ],
    // Other configurations...
  };
  