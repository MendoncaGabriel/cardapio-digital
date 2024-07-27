// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ProdutoProvider } from './providers/Produto'; // Corrigir o nome para `ProdutoProvider`

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProdutoProvider>
    <App />
  </ProdutoProvider>
);
