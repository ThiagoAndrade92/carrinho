//Css
import { Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import { Nav } from './components/Nav';

//Pages
import { AdicionarProduto } from './pages/AdicionarProduto';
import { Produtos } from './pages/Produtos';
import { Carrinho } from './pages/Carrinho';
import { RemoverProduto } from './pages/RemoverProduto';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Produtos />} />
        <Route path='/adicionarProdutos' element={<AdicionarProduto />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/removerProdutos' element={<RemoverProduto />} />
      </Routes>
    </>
  )
}

export default App;