/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
}
