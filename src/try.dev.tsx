// THIS IS FOR TEST AS DEVELOPMENT MODE
// YOU CAN REMOVE EVERYTHING
import React from 'react';
import '../css/pyx.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { audioUrlToBase64, desc, mergeSort, PyxButton, quickSort } from './main';
import { consoleError, consoleWarning } from './utils/logger/error-controller';
import {PyxNavbar} from './styles/reactjs/components/compound/navbar';

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
      {/* <header className='pyx-navbar'>
        <h1>Patata</h1>
        <nav>
          <ul>
            <li><a href='#'>Patata</a></li>
            <li><a href='#'>Patata 2</a></li>
            <li><a href='#'>Patata 3</a></li>
          </ul>
        </nav>
        <button className='pyx-button menu-button'>Toggle</button>
      </header> */}
      <PyxNavbar logo='LOGO' links={[<a href='#'>Patata</a>, <a href='#'>Patata 2</a>, <a href='#'>Patata 3</a>]} />
      <button className='danger'>Este es el boton</button>
      <PyxButton variant='info'>This is the pyx button</PyxButton>
      <input type='text' placeholder='Search'/>
      <div className='level-0'>Esto es el level-0</div>
      <div className='level-1'>Esto es el level-1</div>
      <div className='level-2'>Esto es el level-2</div>
      <div className='level-3'>Esto es el level-3</div>
      <div className='level-4'>Esto es el level-4</div>
      <form>
        <p><label>Prueba de texto<input type='text' name='prueba'/></label></p>
        <p><label>prueba de email<input type='email' name='prueba'/></label></p>
        <fieldset>
          <legend>Prueba del legend</legend>
          <p><label> <input type='radio' name='size' /> Small </label></p>
          <p><label> <input type='radio' name='size' /> Medium </label></p>
          <p><label> <input type='radio' name='size' /> Large </label></p>
        </fieldset>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div className='pyx-block'>
          This is the block
        </div>
      </form>
    </div>
  </StrictMode>
)
function consoleInfo(arg0: string, arg1: boolean) {
  throw new Error('Function not implemented.');
}

