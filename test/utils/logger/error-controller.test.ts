import {consoleError, consoleWarning, error} from './../../../src/utils/logger/error-controller';

test('consoleError', () => {
  let message: boolean | null = consoleError('This is the error', false);
  expect(message).toBe(false);
  message = consoleError('This is the error', null);
  expect(message).toBe(null);
});

test('consoleWarning', () => {
  let message: boolean | null = consoleWarning('This is the error', false);
  expect(message).toBe(false);
  message = consoleError('This is the error', null);
  expect(message).toBe(null);
});

test('console Throw', () => {
  expect(() => error('This is the error')).toThrow('error');
});