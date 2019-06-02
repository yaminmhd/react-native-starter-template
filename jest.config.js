module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    // '@messages': '<rootDir>/messages/en-SG.json',
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  collectCoverage: true,
  collectCoverageFrom: [],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 89,
      lines: 90,
    },
  },
  coverageDirectory: '<rootDir>/coverage',
  testURL: 'http://localhost',
  verbose: true,
};
