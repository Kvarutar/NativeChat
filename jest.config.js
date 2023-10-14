module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/setup-tests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.js',
  // },
};