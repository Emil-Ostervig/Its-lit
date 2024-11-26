import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';

const mountApp = () => {
  const targetElement = document.getElementById('root');

  if (!targetElement) {
    console.error('No root element found. Cannot mount app :(');
    return;
  }

  createRoot(targetElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};
mountApp();
