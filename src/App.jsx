//Css
import './App.css';

//React router
import { Route, Routes, useLocation } from 'react-router-dom';

//Components
import { Nav } from './components/Nav';

//Pages
import { AdicionarProduto } from './pages/AdicionarProduto';
import { Produtos } from './pages/Produtos';
import { Carrinho } from './pages/Carrinho';
import { RemoverProduto } from './pages/RemoverProduto';
import { Login } from './pages/Login';
import { Cadastrar } from './pages/Cadastrar';



function App() {
  const location = useLocation();

  const hideNavRoutes = ["/", "/cadastrar"];

  return (
    <>
      {!hideNavRoutes.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/adicionarProdutos' element={<AdicionarProduto />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/removerProdutos' element={<RemoverProduto />} />
      </Routes>
    </>
  )
}

export default App;