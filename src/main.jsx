import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//React router
import { BrowserRouter } from 'react-router-dom';

//Provider
import { ProdutoProvider } from './context/ProdutoProvider/index.jsx';
import { CarrinhoProvider } from './context/CarrinhoProvider/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarrinhoProvider>
      <ProdutoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProdutoProvider>
    </CarrinhoProvider>
  </StrictMode>,
)
