module.exports = {
  testPathIgnorePatterns: ['/cypress/', '/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte',
  },
  moduleFileExtensions: ['js', 'svelte'],
  bail: false,
  verbose: true,
  collectCoverage: true,
  // collectCoverageFrom: [
  //   './packages/**/*.{js,svelte}',
  //   '!./packages/**/node_modules/**',
  //   '!./packages/**/__sapper__/**',
  // ],
  coveragePathIgnorePatterns: ['/cypress/', '/node_modules/', '/__sapper__/'],
};
