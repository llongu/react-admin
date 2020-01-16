module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  collectCoverageFrom: [
    "**/src/pages/**/*.{tsx,ts}"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/tests/**/*.(test|spec).ts?(x)'],
  setupFiles: ['./tests/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1"
  },

}