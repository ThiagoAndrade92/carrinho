//Css
import style from './RemoverProduto.module.css';

//Context
import { useProdutoContext } from '../../hook/useProdutoContext';

//Component
import { Btn } from "../../components/Btn";

export const RemoverProduto = () => {
   
   const {removerProduto, produto} = useProdutoContext();
      
   

   return (
      <div className={`${style.remover_produto}`}>
         <h1>Remover Produtos</h1>
         <ul>
            {produto && produto.map((p) => (
               <li key={p.id}>
                  {p.nome} - R$: {p.preco}
                  <Btn onClick={() => removerProduto(p.id)}>
                     Remover
                  </Btn>
               </li>
            ))}
         </ul>
      </div>

   )
}
