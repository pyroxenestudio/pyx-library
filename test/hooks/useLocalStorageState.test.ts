import { renderHook, act } from '@testing-library/react';
import {useLocalStorageState} from './../../src/reactjs/hooks/useLocalStorageState';

test('useLocalStorageState hook', () => {
  const {result} = renderHook(() => useLocalStorageState<string>('patata'));

  expect(result.current.value).toBe(null);

  act(() => {
    result.current.setState('This is the potato');
  });

  expect(result.current.value).toBe('This is the potato');

  act(() => {
    result.current.setState(null);
  });

  expect(result.current.value).toBe(null);

});

describe('Only for testing if load the value at the first render', () => {

  beforeEach(() => {
    localStorage.setItem('patata', JSON.stringify('This is the potato'));
  });

  test('Check if patata is loaded at first render', () => {
    const {result} = renderHook(() => useLocalStorageState<string>('patata'));
    expect(result.current.value).toBe('This is the potato');
  });

});