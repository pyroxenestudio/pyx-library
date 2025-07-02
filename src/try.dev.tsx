// THIS IS FOR TEST AS DEVELOPMENT MODE
// YOU CAN REMOVE EVERYTHING
import React from 'react';
import '../css/pyx.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { audioUrlToBase64, desc, mergeSort, PyxButton, quickSort } from './main';
import { consoleError, consoleWarning } from './utils/logger/error-controller';
import {PyxNavbar} from './styles/reactjs/components/compound/PyxNavbar';

console.log(audioUrlToBase64);

// METHOD
// const unSortedArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const unSortedArray = [9,5,3,2,6];
const sortedArray = mergeSort(unSortedArray);
audioUrlToBase64('/test/utils/audio/cat.mp3').then((value) => {
  console.log(value);
}).catch(((error) => {
  console.log(error);
}));
// console.log(sortedArray);

// Check Error
// consoleWarning('Patata con salsa', false);

// console.time('patata');
// console.timeEnd('patata');

// REACTJS
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <PyxNavbar logo='LOGO' links={[<a href='#'>Patata</a>, <a href='#'>Patata 2</a>, <a href='#'>Patata 3</a>]} />
      <div className='content'>
        <h2 className='text-2xl'>Title</h2>
        <h3 className='text-xl'>Subtitle</h3>
        <PyxButton variant='info'>Button info</PyxButton>
      </div>
      <footer>
        Este es el footer
      </footer>
    </>
  </StrictMode>
)
function consoleInfo(arg0: string, arg1: boolean) {
  throw new Error('Function not implemented.');
}

