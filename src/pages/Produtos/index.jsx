//Css
import style from './Produtos.module.css';

//Hook
import { useFetch } from '../../hook/UseFetch';

//Components
import { Btn } from '../../components/Btn';

//url
const url = 'http://localhost:3000/Produtos';

//Context
import { useCarrinhoContext } from '../../hook/useCarrinhoContext';
import { MeuLink } from '../../components/MeuLink';

export const Produtos = () => {

   const { data:produto, loading, error } = useFetch(url);
   const {carrinho, dispatchCarrinho} = useCarrinhoContext();

   const addProduto = (p) => {
      dispatchCarrinho({type: "ADD_PRODUTO", payload: p});
   };

   return (
      <div className={`${style.produtos}`}>
         <h1>Carrinho</h1>
         <ul>
            {error && <p>{error}</p>}
            {loading && <p>Carregando dados...</p>}
            {produto && produto.map((p) => (
               <li key={p.id}>
                  {p.nome} - R$: {p.preco}
                  <Btn onClick={() => addProduto(p)}>
                     Adicionar
                  </Btn>
               </li>
            ))}
         </ul>
         {carrinho.length === 0 ? '' : <MeuLink to={'/carrinho'}>Carrinho</MeuLink>}
      </div>
   )
}