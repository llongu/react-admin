module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  collectCoverageFrom: [
    "**/src/pages/**/*.{tsx,ts}"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|ts?)$',
  setupFiles: ['./tests/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/src/$1"
  // },

}