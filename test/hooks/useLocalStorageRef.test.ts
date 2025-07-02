import { renderHook, act } from '@testing-library/react';
import {useLocalStorageRef} from './../../src/reactjs/hooks/useLocalStorageRef';

test('useLocalStorageRef hook', () => {
  const {result, rerender} = renderHook(() => useLocalStorageRef('patata'));

  expect(result.current.current).toBe(null);

  // Save the value
  result.current.setRef('this is a potato');
  rerender();
  expect(result.current.current).toBe('this is a potato');


  // Remove
  result.current.setRef(null);
  rerender();
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