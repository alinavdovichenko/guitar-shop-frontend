import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { products } from './mocks/products';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App products = {products}/>
  </React.StrictMode>
);
