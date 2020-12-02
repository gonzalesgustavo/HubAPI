module.exports = {
  roots: ['./src'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules'],
  verbose: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/src/Core/",
    "<rootDir>/src/Database/",
    "<rootDir>/src/Config/",
    "<rootDir>/src/app.ts",
    "<rootDir>/src/server.ts",
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 90,
      functions: 0,
      lines: 0,
    },
  },
  setupFiles: [
    '<rootDir>/src/tests/jest.setup.ts'
  ]
};
