import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MarvelApp } from './components/MarvelApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarvelApp />
  </StrictMode>
);
