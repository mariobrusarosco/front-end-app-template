module.exports = {
  testMatch: ['**/src/**/*.test.tsx'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"],
}
