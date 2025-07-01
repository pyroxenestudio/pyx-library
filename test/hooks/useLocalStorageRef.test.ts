import { renderHook, act } from '@testing-library/react';
import {useLocalStorageRef} from './../../src/reactjs/hooks/useLocalStorageRef';

test('useLocalStorageRef hook', () => {
  const {result} = renderHook(() => useLocalStorageRef('patata'));

  expect(result.current.current).toBe(null);

  // Save the value
  // result.current.setRef('this is a potato');
  // expect(result.current.current).toBe('this is a potato');

  // Remove
  result.current.setRef(null);
  expect(result.current.current).toBe(null);
});

describe('Only for testing if load the value at the first render', () => {

  beforeEach(() => {
    localStorage.setItem('patata', JSON.stringify('This is the potato'));
  });

  test('Check if patata is loaded at first render', () => {
    const {result} = renderHook(() => useLocalStorageRef<string>('patata'));
    expect(result.current.current).toBe('This is the potato');
  });

});