module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!index.js'
  ],
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  rootDir: './app',
  setupFilesAfterEnv: ['<rootDir>jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
