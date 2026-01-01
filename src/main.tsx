import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Providers
import { ProdutoProvider } from './context/ProdutoProvider';
import { CarrinhoProvider } from './context/CarrinhoProvider';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <CarrinhoProvider>
      <ProdutoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProdutoProvider>
    </CarrinhoProvider>
  </StrictMode>
);
