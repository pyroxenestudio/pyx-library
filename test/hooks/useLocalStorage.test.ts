import { renderHook, act } from '@testing-library/react';
import {useLocalStorage} from './../../src/reactjs/hooks/useLocalStorage';

test('useLocalStorage hook', () => {
  const {result} = renderHook(() => useLocalStorage());
  const {getValue, save, remove} = result.current;

  expect(getValue('patata')).toBe(null);

  // Save the value
  save('patata', 'this is a potato');
  expect(getValue('patata')).toBe('this is a potato');

  // Remove
  remove('patata');
  expect(getValue('patata')).toBe(null);
});

test('useLocalStorage hook with expiration date', () => {

  const {result} = renderHook(() => useLocalStorage());
  const {getValue, save} = result.current;
  let date = new Date();
  // Substract one day
  date.setDate(date.getDate() - 1);
  // Save the value
  save('patata', 'this is a potato', date);
  // Check if the date is expire so it will remove it
  expect(getValue('patata')).toBe(null);

  // Set date to one day in advance
  date = new Date();
  date.setDate(date.getDate() + 1);
  save('patata', 'this is a potato with expire date', date);
  // Check if the date is not expire so it won't be removed
  expect(getValue('patata')).toBe('this is a potato with expire date');
});

test('useLocalStorage check errors', () => {

  const {result} = renderHook(() => useLocalStorage());
  const {getValue, save, remove} = result.current;

  // Empty name
  expect(getValue('')).toBe(null);

  expect(save('', '')).toBe(false);

  expect(save('patata', '')).toBe(false);

  expect(remove('')).toBe(false);

});