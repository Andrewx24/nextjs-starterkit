import type { Config } from 'jest';
import nextJest from 'next/jest.js';

// Create a Jest config using next/jest
const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  
  // Coverage settings
  collectCoverage: true,
  collectCoverageFrom: [
    'pages/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Jest setup file (uncomment if you have a jest.setup.ts file)
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Module alias mapping
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },

  // Transform TypeScript and TSX files using Babel
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
};

// Create and export Jest config
export default createJestConfig(customJestConfig);

