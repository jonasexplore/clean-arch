module.exports = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  coverageProvider: "v8",
  testEnvironment: "node",
};
