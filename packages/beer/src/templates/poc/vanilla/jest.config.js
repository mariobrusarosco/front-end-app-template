module.exports = {
  testMatch: ['**/src/**/*.test.ts'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"],
}
