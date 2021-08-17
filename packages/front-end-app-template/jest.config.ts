// module.exports = {
//   testEnvironment: 'node',
//   moduleFileExtensions: ['ts', 'js', 'json'],
//   testMatch: ['<rootDir>/__test__/**/*.test.ts'],
//   transform: {'\\.ts$': 'ts-jest'},
//   collectCoverageFrom: ['src/**/*.ts'],
//   coveragePathIgnorePatterns: ['/templates/'],
//   coverageThreshold: {
//     global: {
//       branches: 100,
//       functions: 100,
//       lines: 100,
//       statements: 100,
//     },
//   },
// }

import type { Config } from '@jest/types';


const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['<rootDir>/__test__/**/*.test.ts'],
  transform: {'\\.ts$': 'ts-jest'},
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['/templates/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
