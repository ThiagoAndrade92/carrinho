//Css
import style from './RemoverProduto.module.css';

//Hook
import { useFetch } from "../../hook/UseFetch";

//Component
import { Btn } from "../../components/Btn";

//url
const url = 'http://localhost:3000/Produtos';

export const RemoverProduto = () => {

   const { data: produto, setData } = useFetch(url);

   const removerProduto = async (id) => {
      await fetch(`${url}/${id}`, {
         method: "DELETE",
      });

      setData(prevProduto => prevProduto.filter((p) => p.id !== id))

   };

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