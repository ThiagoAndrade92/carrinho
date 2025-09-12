//Css
import { Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import { Nav } from './components/Nav';

//Pages
import { AdicionarProduto } from './pages/AdicionarProduto';
import { Produtos } from './pages/Produtos';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/adicionarProdutos' element={<AdicionarProduto />} />
        <Route path='/' element={<Produtos />} />
      </Routes>
    </>
  )
}

export default App
