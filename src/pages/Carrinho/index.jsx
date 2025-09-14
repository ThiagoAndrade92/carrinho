///Css
import style from './Carrinho.module.css';

//Component
import { Btn } from '../../components/Btn';

//Hook
import { useCarrinhoContext } from '../../hook/useCarrinhoContext';

//React router
import { useNavigate } from 'react-router-dom';

//React
import { useEffect } from 'react';


export const Carrinho = () => {
   const navigate = useNavigate();

   const { carrinho, dispatchCarrinho } = useCarrinhoContext();

   const total = carrinho.reduce((acc, p) => acc + p.preco * p.qtd, 0);

   useEffect(() => {

      if(carrinho.length === 0) {
         navigate('/');
      }

}, [carrinho, navigate]);

if (carrinho.length === 0) return null;

   return (
   
      <div className={`${style.tabela}`}>
         <table>
            <thead>
               <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
               </tr>
            </thead>
            <tbody>
               {carrinho && carrinho.map((p) => (
                  <tr key={p.id}>
                     <td>{p.nome}</td>
                     <td>{p.preco}</td>
                     <td>
                        <Btn className={`${style.operador}`} 
                        onClick={() => dispatchCarrinho({type: "REMOVER_UM", payload: p.id})}>
                           -
                        </Btn>
                        <span>{p.qtd}</span>
                        <Btn className={`${style.operador}`} 
                        onClick={() => dispatchCarrinho({type: "ADD_PRODUTO", payload: p})}>
                           +
                        </Btn>
                     </td>
                     <td>{p.preco * p.qtd}</td>
                  </tr>
               ))}
         </tbody>
         <tfoot>
            <tr>
               <td colSpan={3}>TOTAL</td>
               <td>{total}</td>
            </tr>
         </tfoot>
      </table>

      <Btn className={`${style.zerar}`} onClick={() => dispatchCarrinho({type: "RESETAR"})}>Limpar Carrinho</Btn>
      </div >
   )
};