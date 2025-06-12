import { asc, bubbleSort, countingSort, desc, mergeSort, quickSort } from './../../src/sorting/sorting';

test('ASC sorting', () => {
  const unSortedArray = [9,5,3,2,6];
  const sortedArray = asc(unSortedArray);
  expect(sortedArray).toEqual([2,3,5,6,9]);
});

test('DESC sorting', () => {
  const unSortedArray = [9,5,3,2,6];
  const sortedArray = desc(unSortedArray);
  expect(sortedArray).toEqual([9,6,5,3,2]);
});

test('Bubble Sort', () => {
  const unSortedArray = [9,5,3,2,6];
  const sortedArray = bubbleSort(unSortedArray);
  expect(sortedArray).toEqual([2,3,5,6,9]);
});

test('Counting Sort', () => {
  const unSortedArray = [9,5,3,2,6];
  const sortedArray = countingSort(unSortedArray);
  expect(sortedArray).toEqual([2,3,5,6,9]);
});

test('Quick Sort', () => {
  const unSortedArray = [9,5,3,2,6];
  const sortedArray = quickSort(unSortedArray);
  expect(sortedArray).toEqual([2,3,5,6,9]);
});

test('Merge Sort', () => {
  const unSortedArray = [9,5,3,2,6];
  const sortedArray = mergeSort(unSortedArray);
  expect(sortedArray).toEqual([2,3,5,6,9]);
});