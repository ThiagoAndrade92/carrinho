//Css
import style from './Produtos.module.css';

//Hook
import { useFetch } from '../../hook/UseFetch';

//Components
import { Btn } from '../../components/Btn';
import { MeuLink } from '../../components/MeuLink';

//Context
import { useCarrinhoContext } from '../../hook/useCarrinhoContext';

//url
const urlProduto = 'http://localhost:3000/Produtos';

export const Produtos = () => {

   const { data:produto, loading, error } = useFetch(urlProduto);

   const {addProduto, carrinho} = useCarrinhoContext();

   

   return (
      <div className='container'>
         <div className={`${style.produtos}`}>
            <h1>Produtos</h1>
            <ul>
               {error && <p>{error}</p>}
               {loading && <p>Carregando dados...</p>}
               {produto && produto.map((p) => (
                  <li key={p.id}>
                     <div className={`${style.img}`} style={{backgroundImage: `url(${p.img})`}}>
                     </div>
                     {p.nome} - R$: {p.preco}
                     <Btn onClick={() => addProduto(p)}>
                        Adicionar
                     </Btn>
                  </li>
               ))}
            </ul>
            {carrinho.length === 0 ? '' : <MeuLink to={'/carrinho'}>Ver carrinho</MeuLink>}
         </div>
      </div>
   )
}