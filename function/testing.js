export default async function(inputs) {
  return `Hello ${inputs.name || 'World'}`;
}

// greet.test.js
import greet from './greet';

test('greets with Hello World by default', async () => {
  expect(await greet({})).toBe('Hello World');
});

test('greets with name', async () => {
  expect(await greet({ name: 'Meta' })).toBe('Hello Meta');
});