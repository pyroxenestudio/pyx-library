// THIS IS FOR TEST AS PRODUCTION MODE
// YOU CAN REMOVE EVERYTHING

import React from 'react';
import 'pyx/pyx.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { audioUrlToBase64, desc, mergeSort, PyxButton, quickSort } from 'pyx';
import { consoleError, consoleWarning } from './utils/logger/error-controller';

console.log(audioUrlToBase64);

// METHOD
// const unSortedArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const unSortedArray = [9,5,3,2,6];
const sortedArray = mergeSort(unSortedArray);
console.log(sortedArray);

// Check Error
// consoleWarning('Patata con salsa', false);

// console.time('patata');
// console.timeEnd('patata');
// REACTJS
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <button className='success-interactive'>Este es el boton</button>
      <PyxButton variant='success'>This is the pyx button</PyxButton>
    </div>
  </StrictMode>
)
function consoleInfo(arg0: string, arg1: boolean) {
  throw new Error('Function not implemented.');
}

