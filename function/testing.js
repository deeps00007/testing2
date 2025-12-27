function greet() {
  return 'Hello World';
}
module.exports = greet;

// greet.test.js
const greet = require('./greet');

test('greets with Hello World', () => {
  expect(greet()).toBe('Hello World');
});