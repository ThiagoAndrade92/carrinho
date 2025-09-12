//Css
import { Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import { Nav } from './components/Nav';

//Pages
import { AdicionarProduto } from './pages/AdicionarProduto';
import { Produtos } from './pages/Produtos';
import { Carrinho } from './pages/Carrinho';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Produtos />} />
        <Route path='/adicionarProdutos' element={<AdicionarProduto />} />
        <Route path='/carrinho' element={<Carrinho />} />
      </Routes>
    </>
  )
}

export default App
cd