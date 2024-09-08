import { getJestProjectsAsync } from '@nx/jest';

export default async () => ({
  projects: await getJestProjectsAsync(),
});
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "@apps/main-app/(.*)$": "<rootDir>/apps/main-app/src/$1",
    "@lib/PopupsProvider/(.*)$": "<rootDir>/PopupsProvider/src/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(uuid)/)"
  ],
  testEnvironment: "jsdom"
};
