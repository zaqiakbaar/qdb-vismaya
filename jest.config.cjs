/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-test.ts"
    ],
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "collectCoverageFrom": [
      "src/**/Sidebar.{js,jsx,ts,tsx}",
      "src/hooks/users/*.{js,jsx,ts,tsx}",
      "src/utils/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/**/*.{spec,test}.{js,jsx,ts,tsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/dist/**",
      "!**/build/**",
      "!vite.config.ts",
      "!**/coverage/**"
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "setup-tests.ts",
      "vite-env.d.ts"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    }
};
