import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//React router
import { BrowserRouter } from 'react-router-dom';

//Provider
import { CriarProdutoProvider } from './context/CriarProdutoProvider/index.jsx';
import { CarrinhoProvider } from './context/CarrinhoProvider/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarrinhoProvider>
      <CriarProdutoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CriarProdutoProvider>
    </CarrinhoProvider>
  </StrictMode>,
)
