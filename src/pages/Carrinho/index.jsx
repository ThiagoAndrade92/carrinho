///Css
import style from './Carrinho.module.css';

//Component
import { Btn } from '../../components/Btn';

//React
import { useCarrinhoContext } from '../../hook/useCarrinhoContext';
import { useEffect, useMemo, useState } from 'react';


export const Carrinho = () => {

   const { carrinho, addProduto, removerUm, zerarCarrinho } = useCarrinhoContext();
   const [compraFinalizada, setCompraFinalizada] = useState(false);

   const total = useMemo(() => {
      return carrinho.reduce((acc, p) => acc + p.preco * p.qtd, 0);
   }, [carrinho]);


   
   const finalizaCompra = () => {
      
      setCompraFinalizada(true);
      
      
      
      
      zerarCarrinho();
      
   };
   
   useEffect(() => {
      if (compraFinalizada) {
         const timer = setTimeout(() => {
            setCompraFinalizada(false);
         }, 3000);
         return () => clearTimeout(timer);
      }
   }, [compraFinalizada])

   
   
   
   return (
      
      <div className={`${style.tabela}`}>
         {compraFinalizada && (
            <div className={`${style.compra_finalizada} ${compraFinalizada ? style.active : ''}`}>
               <p>Compra finalizada, agradecemos a preferencia 🥰.</p>
            </div>
         )}

         {carrinho.length === 0 && !compraFinalizada && (
         <p className={`${style.vazio}`}>Seu carrinho está vazio</p>
       )}

       {carrinho.length > 0 && (
         <>
         <h1>Carrinho</h1>
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
                           onClick={() => removerUm(p)}
                        >
                           -
                        </Btn>
                        <span>{p.qtd}</span>
                        <Btn className={`${style.operador}`}
                           onClick={() => addProduto(p)}
                        >
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

         <Btn className={`${style.zerar}`} onClick={() => zerarCarrinho()} >Limpar Carrinho</Btn>

         <Btn className={`${style.finalizar_compra} ${compraFinalizada ? style.active : ''}`} disabled={compraFinalizada} onClick={() => finalizaCompra()}>
            Finalizar Compra
         </Btn>
         </>
       )}
      </div >
   )
};