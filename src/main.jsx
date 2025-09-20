import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//React router
import { BrowserRouter } from 'react-router-dom';

//Provider
import { ProdutoProvider } from './context/ProdutoProvider/index.jsx';
import { CarrinhoProvider } from './context/CarrinhoProvider/index.jsx';
import { UsuarioProvider } from './context/UsuarioProvider/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <CarrinhoProvider>
        <ProdutoProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProdutoProvider>
      </CarrinhoProvider>
    </UsuarioProvider>
  </StrictMode>,
)
