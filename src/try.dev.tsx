import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { audioUrlToBase64 } from './main';
import './../css/pyx.css';

console.log(audioUrlToBase64);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>PATATA REACTJS</div>
  </StrictMode>
)
