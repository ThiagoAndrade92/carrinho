//Css
import style from './Produtos.module.css';

//Hook
import { useFetch } from '../../hook/UseFetch';

//Components
import { Btn } from '../../components/Btn';

//url
const url = 'http://localhost:3000/Produtos';

export const Produtos = () => {

   const { data:produto, loading, error } = useFetch(url);

   return (
      <div className={`${style.produtos}`}>
         <h1>Carrinho</h1>
         <ul>
            {error && <p>{error}</p>}
            {loading && <p>Carregando dados...</p>}
            {produto && produto.map((p) => (
               <li key={p.id}>
                  {p.nome} - R$: {p.preco}
                  <Btn>
                     Adicionar
                  </Btn>
               </li>
            ))}
         </ul>
      </div>
   )
}